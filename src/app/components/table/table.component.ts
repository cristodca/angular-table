import { Component, OnInit } from '@angular/core';
import { Factura } from 'src/app/models/factura';
import { FacturasEmitidasService } from 'src/app/services/facturas-emitidas.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  activeBody: Boolean = this.facturasEmitidasServices.isFacturasData
  facturas: Factura[] = this.facturasEmitidasServices.getFacturasEmitidas()

  constructor(public facturasEmitidasServices: FacturasEmitidasService, public searchServices: SearchService) { }

  ngOnInit(): void {}

  onOnChanges(): void {
    this.facturas = this.facturasEmitidasServices.getFacturasEmitidas()
  }
}
