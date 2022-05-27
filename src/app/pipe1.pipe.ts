import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe1'
})
export class Pipe1Pipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {

    console.log("value",value);
    console.log("args",args);
    return value;
  }

}
