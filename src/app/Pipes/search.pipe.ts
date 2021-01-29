import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val: { email: string; adharNo: string; }) => {
      let rVal = (val.email.toLocaleLowerCase().includes(args)) || (val.adharNo.toLocaleLowerCase().includes(args));
      return rVal;
    })

  }

}
