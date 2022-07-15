export interface Factura {
  id: number,
  folio: string,
  tipo_de_comprobante: string,
  fecha_expedicion: string,
  uuid: string,
  estatus: string,
  rr?: string,
  tt?: string,
  empresa_id?: string,
  re?: string,
  archivo_url?: string
}
