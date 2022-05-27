import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchTerm: any, searchBy: string) {
    // when our serach is undefined or null


    console.log("items",items);
    console.log("searchterm", searchTerm);
    console.log("search By",searchBy);
    if (!searchTerm) {
      return items;
    }

    console.log('items', items);

    // when there is partial or full match of the search term
    return items.filter((item) => {
      console.log("item in filter", item)
      const currentItem = item[searchBy];
      console.log("currentitem", currentItem);
      return currentItem
        .toString()
        .toLowerCase()
        .includes(searchTerm.trim().toLowerCase());
    });
  }
}
