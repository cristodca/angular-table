import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  searchForm: FormGroup = new FormGroup({
    search: new FormControl()
  })

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  setParamToSearch() {
    this.searchService.setToSearch(this.searchForm.value?.search)
  }
}
