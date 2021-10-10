import { Component, OnInit } from '@angular/core';
import { AlphaService } from 'src/app/services/alpha.service';
import { ExplorerModule } from './explorer.module';
import { CnftService } from 'src/app/services/cnft.service';
import { Subscription } from 'rxjs';
import instanceMap from '../../services/instanceMap.json';
import { ElementSchemaRegistry } from '@angular/compiler';
import { NavigationStart, Router } from '@angular/router';


@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.scss']
})
export class ExplorerComponent implements OnInit {

  public alphaSub: Subscription;

  public data;
  public count;
  public unitNameList;
  public units = [];
  public displayedUnits = [];
  public itemsMap = {};
  public itemList = []

  public expanded = {};

  public priceMin: any = '';
  public priceMax: any = '';
  public unitMin: any = '';
  public unitMax: any = '';
  public sortBy: string = '';
  public isAsc = true;

  public page = 1;
  public pageSize = 25;

  public showLooseCheckBox = false;
  public showStrictCheckBox = false;
  public loading = false;
  public fetchFailed = false;

  public strictFilterList = []
  public looseFilterList = []
  public strictFilters = {}
  public looseFilters = {}

  public colorGradient = [
    "#ff9900",
    "#cc00ff",
    "#0066ff",
    "#5e5e5e"
  ];

  constructor(
    private alphaService: AlphaService,
    private cnftService: CnftService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.strictFilters = this.cnftService.getFilterList();
    this.looseFilters = this.cnftService.getFilterList();
    this.itemList = Object.keys(this.cnftService.getFilterList());
    this.itemsMap = this.alphaService.getItemsMap()

    this.router.events.subscribe(event =>{
      if ((event instanceof NavigationStart) && this.alphaSub){
        this.alphaSub.unsubscribe()
      }
    })

    this.populate()
    //this.devPopulate()
  }

  //private devPopulate(){
  //  this.data = unitsJson['units']
  //  this.parseListings()
  //  this.displayedUnits = this.units;
  //  this.fetchFailed = false;
  //  this.loading = false;
  //}

  private async populate(){
    await this.fetchUnits()
  }

  private async fetchUnits(){
    this.loading = true;

    try {

      this.alphaSub = this.alphaService.getUnits()
        .subscribe(
          data => {
            this.data = data.units
            this.parseListings()
            this.displayedUnits = this.units;
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

  private parseListings(){
    for (let listing in this.data){

      var unit = {
        name: parseInt(listing.match(/\d{5}/)[0]),
        base: this.data[listing].unit.base,
        value: parseInt(this.data[listing].unit.value),
        poster: this.data[listing].unit.poster,
        price: this.data[listing].listing ? this.data[listing].listing.price/1000000 : '',
        itemCount: this.data[listing].unit.contents.length,
        glitched: this.data[listing].unit.glitch != null ? "yes" : "no",
        listingId: this.data[listing].listing ? this.data[listing].listing.id : null,
        itemsMap: {},
        itemsList: []
      }
      
      for (let item of this.data[listing].unit.contents){
        unit['itemsMap'][item] = true
        unit['itemsList'].push({
          "name": this.itemsMap[item],
          "instances": parseInt(instanceMap[this.itemsMap[item]])
        })
      }

      unit['itemsList'].sort((a,b) => a.instances - b.instances)

      this.units.push(unit)

    }
  }

  public applyFilters(){
    this.displayedUnits = this.displayedUnits.filter((unit) => this.listingPassed(unit))
  }

  private compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  public listingPassed(listing){

    if (this.priceMax != '') {
      if (!(listing.price <= this.priceMax) || listing.price == ''){
        return false
      }
    }

    if (this.priceMin != '') {
      if (!(listing.price >= this.priceMin) || listing.price == ''){
        return false
      }
    }

    if (this.unitMin != '') {
      if (!(listing.name >= this.unitMin)){
        return false
      }
    }

    if (this.unitMax != '') {
      if (!(listing.name <= this.unitMax)){
        return false
      }
    }

    if (this.strictFilterList.length != 0) {
      var count = 0
      for (let filter of this.strictFilterList){
        if (listing.itemsMap[this.itemsMap[filter]]){
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
        if (listing.itemsMap[this.itemsMap[filter]]){
          count++
        }
      }
      if (!(count > 0)){
        return false
      }
    }

    return true;
  }

  public applySort(){
    var self = this;
    if (this.sortBy == 'number'){
      this.displayedUnits.sort((a, b) => self.compare(a.name, b.name, self.isAsc))
    }
    if (this.sortBy == 'value'){
      this.displayedUnits.sort((a, b) => self.compare(a.value, b.value, self.isAsc))
    }
    if (this.sortBy == 'price'){
      this.displayedUnits = this.displayedUnits.filter((unit) => unit.price != "").sort((a, b) => self.compare(a.price, b.price, self.isAsc))
    }
    if (this.sortBy == 'items'){
      this.displayedUnits.sort((a, b) => self.compare(a.itemCount, b.itemCount, self.isAsc))
    }
    if (this.sortBy == 'base'){
      this.displayedUnits.sort((a, b) => self.compare(a.base, b.base, self.isAsc))
    }
    if (this.sortBy == 'poster'){
      this.displayedUnits.sort((a, b) => self.compare(a.poster, b.poster, self.isAsc))
    }
    if (this.sortBy == 'glitched'){
      this.displayedUnits.sort((a, b) => self.compare(a.glitched, b.glitched, self.isAsc))
    }

    if(this.page > Math.ceil(this.displayedUnits.length / this.pageSize)){
      this.page = Math.ceil(this.displayedUnits.length / this.pageSize)
    }
  }

  public filter(){
    this.page = 1; 
    this.reset(); 
    this.applyFilters()
    this.applySort()
  }

  public setSort(sort){

    if (this.sortBy != sort){
      this.isAsc = true;
    } else {
      this.isAsc = !this.isAsc
    }
    
    if(this.sortBy == 'price' && sort != 'price'){
      this.reset()
    } 

    this.sortBy = sort;
    this.applyFilters();
    this.applySort();
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

  public getItemColor(itemCount) {

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

  public reset(){
    this.displayedUnits = [];
    for(let unit of this.units){
      this.displayedUnits.push(unit)
    }
  }

  public openListing(id) {
    window.open("https://cnft.io/token.php?id=" + id, "_blank")
  }

  public openAsset(id) {
    window.open("https://pool.pm/a5425bd7bc4182325188af2340415827a73f845846c165d9e14c5aed.Unit" + "0".repeat(5-id.toString().length) + id, "_blank")
  }

  toggleExpand(id){
    if (this.expanded[id]){
      this.expanded[id] = !this.expanded[id]
    } else {
      this.expanded[id] = true
    }
  }

  onKeyMin(event) { this.priceMin = event.target.value; }
  onKeyMax(event) { this.priceMax = event.target.value; }
  onKeyMinUnit(event) { this.unitMin = event.target.value; }
  onKeyMaxUnit(event) { this.unitMax = event.target.value; }
  decrement(){ this.expanded = {}; if (this.page != 1) this.page--; }
  increment(){ this.expanded = {}; if (!(this.page*this.pageSize > this.displayedUnits.length)) this.page++; }
  start(){ this.expanded = {}; this.page = 1}
  end() {this.expanded = {};  this.page = Math.ceil(this.displayedUnits.length / this.pageSize)}
}
  

