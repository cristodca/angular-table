import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { DateFormComponent } from './components/date-form/date-form.component';
import { TableComponent } from './components/table/table.component';
import { RowComponent } from './components/table/row/row.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DateFormComponent,
    TableComponent,
    RowComponent,
    SearchBarComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
