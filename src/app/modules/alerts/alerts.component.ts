import { Component, OnInit, ɵɵqueryRefresh } from '@angular/core';
import { CnftService } from 'src/app/services/cnft.service';
import { Router,NavigationStart} from '@angular/router';
import { AlertsModule } from './alerts.module';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {
  public cnftSub: Subscription;

  public loading = false;
  public fetchFailed = false;
  public notifying = false;

  public priceMin: any = '';
  public priceMax: any = '';
  public unitMin: any = '';
  public unitMax: any = '';

  public showLooseCheckBox = false;
  public showStrictCheckBox = false;

  public strictFilterList = []
  public looseFilterList = []
  public strictFilters = {}
  public looseFilters = {}
  public itemList = []

  public listings = null;
  public refreshedPage = []

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
    this.strictFilters = this.cnftService.getFilterList();
    this.looseFilters = this.cnftService.getFilterList();
    this.itemList = Object.keys(this.cnftService.getFilterList());
    this.router.events.subscribe(event =>{
      if ((event instanceof NavigationStart) && this.cnftSub){
        this.stopNoti()
      }
   })
  }

  public startNoti() {
    this.notifying = true;
    if (!('Notification' in window)) {
      alert('Web Notification not supported');
      return;
    }

    Notification.requestPermission(function (permission) {
      var notification = new Notification("Notification service started", { body: "New listings appear here", icon: '../../../assets/CC_logo.png', dir: 'auto' });
      setTimeout(function () {
        notification.close();
      }, 3000);
    });

    this.refresh()

    var self = this;
    setInterval(function () {
      self.refresh()
    }, 10000)
  }

  public refresh() {
    if (this.notifying) {
      this.loading = true;

      try {

        this.cnftSub = this.cnftService.getListings(this.buildOptions())
          .subscribe(
            data => {
              this.refreshedPage = this.parseListings(data)
              this.fetchFailed = false;
              var newListings = this.getNewListings()
              this.analyseNewListings(newListings)
              this.listings = this.refreshedPage;
              this.loading = false;
            },
            error => {
              this.fetchFailed = true;
              this.stopNoti()
            }
          )
      } catch (error) {
        console.log("Error fetching listings")
      }
    }
  }

  public analyseNewListings(newListings){
    for (let listing of newListings){
      if(this.listingPassed(listing)){
        this.notify(listing);
      }
    }
  }

  public listingPassed(listing){

    if (this.priceMax != '') {
      if (!(listing.price < this.priceMax)){
        return false
      }
    }

    if (this.priceMin != '') {
      if (!(listing.price > this.priceMin)){
        return false
      }
    }

    if (this.unitMin != '') {
      var unitNo = parseInt(listing.name.replace('Unit', ''))
      if (!(unitNo > this.unitMin)){
        return false
      }
    }

    if (this.unitMax != '') {
      var unitNo = parseInt(listing.name.replace('Unit', ''))
      if (!(unitNo < this.unitMax)){
        return false
      }
    }

    if (this.strictFilterList.length != 0) {
      var count = 0
      for (let filter of this.strictFilterList){
        if (listing.itemsMap[filter]){
          count++
        }
      }
      if (!(count == this.strictFilterList.length)){
        return false
      }
    }

    if (this.looseFilterList.length != 0) {
      var count = 0
      for (let filter of this.looseFilterList){
        if (listing.itemsMap[filter]){
          count++
        }
      }
      if (!(count > 0)){
        return false
      }
    }

    return true;
  }

  public notify(listing){
    var notification = new Notification("New Listing:", { body: listing.name + ": " + listing.price + "ADA", icon: '../../../assets/CC_logo.png', dir: 'auto' });
    setTimeout(function () {
      notification.close();
    }, 4000);
  }


  private getNewListings(){
    if(this.listings == null){
      return []
    }
    var newListings = []
    var count = 0
    var listing;
    for (var i = 0; i <= 10; i++){
      count = 0
      listing = this.refreshedPage[i]
      for (let oldListing of this.listings){
        if (listing.name == oldListing.name){
          count++
        }
      }
      if (count == 0) {
        newListings.push(listing)
      }
    }
    return newListings
  }

  private parseListings(listings) {
    var assets = []
    for (let asset of listings.assets) {

      var newAsset = {
        id: asset.id,
        name: asset.metadata.files[0].name,
        price: asset.price / 1000000,
        numItems: asset.metadata.tags[5].numberOfItems,
        items: [],
        itemsMap: {}
      }

      //if (!newAsset.name.includes("Poster") && !assets.find(el => el.name == newAsset.name)) {
      if (!newAsset.name.includes("Poster")) {
        for (let item of asset.metadata.tags[3].contents) {
          item['text'] = item.instances + " / " + item.name
          item['color'] = this.getItemColor(item.instances)
          newAsset['items'].push(item)
          newAsset.itemsMap[item.name] = true
        }

        newAsset['items'].sort((a, b) => a.instances - b.instances)

        assets.push(newAsset) //move
      }

      // assets.push(newAsset)

    }

    return assets
  }

  private buildOptions() {

    return {
      sort: 'date',
      sortOrder: "desc",
      priceMin: 0,
      priceMax: 999999999999999,
      page: 1
    }
  }

  public stopNoti() {
    if(this.cnftSub){
      this.cnftSub.unsubscribe()
    }
    this.notifying = false;
    this.listings = null;
    this.loading = false;
  }

  public updateFilterList(item, list) {
    if (list == 'loose') {
      this.looseFilters[item] = !this.looseFilters[item]
      if (this.looseFilters[item]) {
        this.looseFilterList.push(item)
      } else {
        for (let itemName of this.looseFilterList) {
          if (itemName == item) {
            this.looseFilterList.splice(this.looseFilterList.indexOf(itemName), 1)
            break;
          }
        }
      }
    } else if (list == 'strict') {
      this.strictFilters[item] = !this.strictFilters[item]
      if (this.strictFilters[item]) {
        this.strictFilterList.push(item)
      } else {
        for (let itemName of this.strictFilterList) {
          if (itemName == item) {
            this.strictFilterList.splice(this.strictFilterList.indexOf(itemName), 1)
            break;
          }
        }
      }
    }
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

  public toggleCheckboxList(checkbox) {
    if (checkbox == 'loose') {
      this.showLooseCheckBox = !this.showLooseCheckBox;
    } else if (checkbox == 'strict') {
      this.showStrictCheckBox = !this.showStrictCheckBox;
    }
  }

  public openLink(id) {
    window.open("https://cnft.io/token.php?id=" + id, "_blank")
  }

  onKeyMin(event) { this.priceMin = event.target.value; }
  onKeyMax(event) { this.priceMax = event.target.value; }
  onKeyMinUnit(event) { this.unitMin = event.target.value; }
  onKeyMaxUnit(event) { this.unitMax = event.target.value; }

}
