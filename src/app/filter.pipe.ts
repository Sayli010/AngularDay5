import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], status: string) {
    if (status) {
      const tempArray = [];

      for (let item of value) {
        if (item.status === status) {
          tempArray.push(item);
        }
      }

      return tempArray;
    } else {
      return value;
    }
  }
}
