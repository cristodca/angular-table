import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  toSearch: string = ''

  constructor() { }

  setToSearch(toSearch: string) {
    this.toSearch = toSearch
  }

  getToSearch() {
    return this.toSearch
  }
}
