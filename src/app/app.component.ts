import { Component } from '@angular/core';

export interface Person {
  name: string;
  age: number;
  country: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  people: Person[] = [];
  searchTerm: any;
  names = ['Maverick', 'Stanislav', 'Arxero', 'Feruchio', 'Mavericus', 'Arxiour'];

  namee:any="REENU";
  constructor() {
    this.names.forEach((e, i) => this.people.push({
      name: e,
      age: i + 20,
      country: 'Bulgaria'
    }));
  }
}
