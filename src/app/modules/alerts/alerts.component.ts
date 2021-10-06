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
  public isMobile = false;

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
    this.isMobile = this.checkMobile();
    this.router.events.subscribe(event =>{
      if ((event instanceof NavigationStart) && this.cnftSub){
        this.stopNoti()
      }
   })
  }

  private checkMobile(){
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor);
    return check;
  }

  public startNoti() {
    this.notifying = true;
    if (!('Notification' in window)) {
      alert('Web Notification not supported');
      return;
    }

    if (this.isMobile){
      Notification.requestPermission();
    } else {
      Notification.requestPermission(function (permission) {
        var notification = new Notification("Notification service started", { body: "New listings appear here", icon: './assets/CC_logo.png', dir: 'auto' });
        setTimeout(function () {
          notification.close();
        }, 3000);
      });
    }

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
    if(this.isMobile){
      navigator.serviceWorker.ready.then(function(registration) {
        registration.showNotification("New Listing:", { body: listing.name + ": " + listing.price + "ADA", icon: './assets/CC_logo.png', dir: 'auto' });
      });
    } else {
      var notification = new Notification("New Listing:", { body: listing.name + ": " + listing.price + "ADA", icon: './assets/CC_logo.png', dir: 'auto' });
      setTimeout(function () {
        notification.close();
      }, 4000);
    }
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
