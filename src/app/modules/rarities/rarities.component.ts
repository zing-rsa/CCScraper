import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlphaService } from 'src/app/services/alpha.service';
import { RaritiesModule } from './rarities.module';


@Component({
  selector: 'app-rarities',
  templateUrl: './rarities.component.html',
  styleUrls: ['./rarities.component.scss']
})
export class RaritiesComponent implements OnInit {
  
  public alphaSub: Subscription;
  
  public items = [];

  public loading = false;
  public fetchFailed = false;

  public colorGradient = [
    "#ff9900",
    "#cc00ff",
    "#0066ff",
    "#5e5e5e"
  ];

  constructor(private alphaService: AlphaService) { }

  ngOnInit(): void {

    //this.getItems()
    //this.getFloors()

    this.items = this.getItems()
    this.getFloors()
    
    
  }

  private getFloors(){
    this.loading = true;

    try {

      this.alphaSub = this.alphaService.getFLoors()
        .subscribe(
          data => {
            this.enrichItems(data)
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

  private enrichItems(data){
    for (let item of this.items){
      for (let dataItem of data.items){
        if (dataItem.name == item.name){
          item['price'] = dataItem.price;
          item['mintCount'] = dataItem.minted;
          break;
        } else if (dataItem.name == "Charles's $bn console" && item.name == "Charles's billion dollar console"){
          item['price'] = dataItem.price;
          item['mintCount'] = dataItem.minted;
          break;
        }
      }
    }

    console.log(this.items)
  }

  private getItems(){
    return this.alphaService.getItems();
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

}
