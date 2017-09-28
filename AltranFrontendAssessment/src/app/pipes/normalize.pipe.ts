import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'normalize'
})
export class NormalizePipe implements PipeTransform {

  transform(input: any): any {
  if (!input){
    return "";
  } 
  input = input
    .replace(" ", "")
    .replace(/\W+/g, "");
  return input.toLowerCase();
  }

}
