import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Factura } from '../models/factura';
import { FacturasEmitidas } from '../models/facturas-emitidas';

@Injectable({
  providedIn: 'root',
})
export class FacturasEmitidasService {
  isFacturasData: Boolean = false
  private facturasEmitidas: Factura[] = []

  constructor(private http: HttpClient) {}

  getFacturasEmitidasFromAPI(startDate: string, endDate: string): Observable<any> {
    let params: HttpParams = new HttpParams()
      .append(
        '_where',
        `ge(fecha_expedicion, "${startDate}") AND lt(fecha_expedicion, "${endDate}")`
      )
      .append('empresa_id', 578);

    this.isFacturasData = true

    return this.http.get(`${environment.api}/facturas_emitidas_v`, {
      params,
      headers: {
        authorization: environment.jwt,
      },
    });
  }
  
  setFacturasEmitidas(facturas: Factura[]) {
    this.facturasEmitidas = facturas
  }
  getFacturasEmitidas() {
    return this.facturasEmitidas
  }
}
