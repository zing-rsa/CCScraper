import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paginator',
  pure: false
})

export class PaginatorPipe implements PipeTransform {

  transform(units:any, page: number, pageSize:number): unknown {
    return units.slice((page-1)*pageSize,((page-1)*pageSize)+pageSize);
  }
}
