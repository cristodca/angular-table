import { Component, Input, OnInit } from '@angular/core';
import { Factura } from 'src/app/models/factura';

@Component({
  selector: 'tr[app-row]',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})

export class RowComponent implements OnInit {
  @Input() factura: Factura | undefined

  constructor() {}

  ngOnInit(): void {
  }

}
