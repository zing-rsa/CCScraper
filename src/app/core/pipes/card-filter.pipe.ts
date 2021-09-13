import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardFilter'
})
export class CardFilterPipe implements PipeTransform {

  transform(assets, showAll, filters, sortBy, order): unknown {
    
    var out = [];

    if (showAll){
      return assets;
    }

    var count = 0;
    for (let asset of assets){
      count = 0;
      for (let item of asset.items){
        for (let filter of filters){
          if (filter == item.name){
            count++
          }
        }
      }
      if (count == filters.length){
        out.push(asset)
      }
    }


    //if (sortBy == "Price" && order == "Desc"){
    //  return out.sort((a, b) => a.price - b.price )
    //} else if (sortBy == "Price" && order == "Asc"){
    //  return out.sort((a, b) => b.price - a.price )
    //}

    return out;
  }
}
