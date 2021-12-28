import { Component, OnInit } from '@angular/core';
import { CnftService } from "../../services/cnft.service";
import { Router,NavigationStart} from '@angular/router';
import { HomeModule } from './home.module';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public cnftSub: Subscription;

  // Form fields
  public sort = "_id";
  public sortOrder = "desc";
  public priceMin = '';
  public priceMax = '';
  public nextPage = 0;

  public listings = [];
  public count = null;
  public processedResults = 0;
  public fetchFailed = false;
  public returnedResultsCount = null;
  public newSearch = null;

  public itemList;
  public filters = {};
  public filterList = [];
  public allowedTypes = ["auction", "listing", "offer"];

  public loading = false;
  public showCheckBox = false;
  private scrollWindow;
  private container;

  private poller;

  public colorGradient = [
    "#ff9900",
    "#cc00ff",
    "#0066ff",
    "#5e5e5e"
  ];

  constructor(
    private cnftService: CnftService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.scrollWindow = document.getElementById('scrollwindow')
    this.container = document.getElementById('container')

    this.filters = this.cnftService.getFilterList();
    this.itemList = Object.keys(this.cnftService.getFilterList());

    this.router.events.subscribe(event =>{
      if ((event instanceof NavigationStart) && this.cnftSub){
        clearInterval(this.poller)
        this.cnftSub.unsubscribe()
      }
   })

    var self = this;
    this.poller = setInterval(function () {
      if ((self.container.scrollHeight - (self.scrollWindow.scrollTop + self.scrollWindow.clientHeight) < 1000
         || (self.sort == 'unitNo' && self.nextPage < 20))
         && !(self.returnedResultsCount == 0)
         && !self.fetchFailed) {
        if (!self.loading) {
          self.getListings()
        }
      }
    }, 500)
  }

  public updateFilterList(item) {
    this.filters[item] = !this.filters[item]
    if (this.filters[item]) {
      this.filterList.push(item)
    } else {
      for (let itemName of this.filterList) {
        if (itemName == item) {
          this.filterList.splice(this.filterList.indexOf(itemName), 1)
          break;
        }
      }
    }
  }

  public updateAllowedTypes(type){
    if (this.allowedTypes.includes(type)){
      this.allowedTypes.splice(this.allowedTypes.indexOf(type), 1)
    } else {
      this.allowedTypes.push(type)
    }
  }

  public openLink(id) {
    window.open("https://cnft.io/token/" + id, "_blank")
  }

  public search() {
    this.cnftSub.unsubscribe();
    this.loading = false;
    this.clear()
  }

  public clear() {
    this.nextPage = 0;
    this.count = null;
    this.listings = [];
    this.processedResults = 0;
    this.returnedResultsCount = null;
  }

  public async getListings() {
    this.loading = true;

    try {
      this.nextPage++;

      this.cnftSub = this.cnftService.getListings(this.buildOptions())
        .subscribe(
          data => {
//            this.count = data.found
            this.listings = this.listings.concat(this.parseListings(data))
            this.returnedResultsCount = data.results.length
            this.fetchFailed = false;
            this.loading = false;
          },
          error => {
            this.fetchFailed = true;
            this.loading = false;
          }
        )
    } catch (error) {
      console.log("Error fetching listings")
    }
  }

  private buildOptions() {

    var options;

    if (this.sort == 'unitNo') {
      options = {
        sort: '_id',
        sortOrder: 'desc',
        priceMin: this.priceMin,
        priceMax: this.priceMax,
        page: this.nextPage
      }
    } else {
      options = {
        sort: this.sort,
        sortOrder: this.sortOrder,
        priceMin: this.priceMin,
        priceMax: this.priceMax,
        page: this.nextPage
      }
    }

    return options
  }

  private parseListings(listings) {
    var assets = []
    for (let result of listings.results) {
      this.processedResults++;

      var newAsset = {
        listingId: result._id,
        id: result.asset.assetId,
        name: result.asset.metadata.files[0].name,
        price: result.price / 1000000,
        numItems: result.asset.metadata.numberOfItems,
        type: result.type,
        items: [],
        itemsMap: {}
      }

      if (!newAsset.name.includes("Poster") && !newAsset.name.includes("07907")) {
        for (let item of result.asset.metadata.contents) {
          item['text'] = item.instances + " / " + item.name
          item['color'] = this.getItemColor(item.instances)
          newAsset['items'].push(item)
          newAsset.itemsMap[item.name] = true
        }

        newAsset['items'].sort((a, b) => a.instances - b.instances)

        assets.push(newAsset)
      }
    }

    return assets
  }

  private getItemColor(itemCount) {

    if (itemCount < 5000) {
      return this.colorGradient[0]
    } else if (itemCount < 10000) {
      return this.colorGradient[1]
    } else if (itemCount < 15000) {
      return this.colorGradient[2]
    } else {
      return this.colorGradient[3]
    }
  }

  public toggleCheckboxList() {
    this.showCheckBox = !this.showCheckBox;
  }

  onKeyMin(event) { this.priceMin = event.target.value; }
  onKeyMax(event) { this.priceMax = event.target.value; }

  selectSortOption(value) { this.sort = value };
  selectOrderOption(value) { this.sortOrder = value };
}
