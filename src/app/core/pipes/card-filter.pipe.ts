import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardFilter',
  pure: false
})
export class CardFilterPipe implements PipeTransform {

  transform(assets, filters, sort, order): unknown {
    
    var out = [];

    if (filters.length == 0){
      out = assets;
    } else {
      var count = 0;
      for (let asset of assets){
        count = 0;
        for (let filter of filters){
          if (asset.itemsMap[filter]){
            count++
          }
        }
        if (count == filters.length){
          out.push(asset)
        }
      }
    }

    if (sort == 'unitNo'){
      if(order == 'asc') {
        out.sort((a, b) => a.name.replace('Unit', '') - b.name.replace('Unit', ''))
      } else {
        out.sort((a, b) => b.name.replace('Unit', '') - a.name.replace('Unit', ''))
      }
      
    }

    return out;
  }
}
