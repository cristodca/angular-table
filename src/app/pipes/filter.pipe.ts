import { Pipe, PipeTransform } from '@angular/core';
import { Factura } from '../models/factura';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(facturas: Factura[], toSearch: string): Factura[] {
    return facturas.filter(
      (factura) =>
        factura.estatus
          ?.toString()
          .toLowerCase()
          .includes(toSearch.toLowerCase()) ||
        factura.folio
          ?.toString()
          .toLowerCase()
          .includes(toSearch.toLowerCase()) ||
        factura.tipo_de_comprobante
          ?.toString()
          .toLowerCase()
          .includes(toSearch.toLowerCase()) ||
        factura.estatus
          ?.toString()
          .toLowerCase()
          .includes(toSearch.toLowerCase()) ||
        factura.fecha_expedicion
          ?.toString()
          .toLowerCase()
          .includes(toSearch.toLowerCase()) ||
          factura.uuid
            ?.toString()
            .toLowerCase()
            .includes(toSearch.toLowerCase()) 
    );
  }
}
