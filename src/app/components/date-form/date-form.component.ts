import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { DateForm } from 'src/app/models/date-form';
import { FacturasEmitidasService } from 'src/app/services/facturas-emitidas.service';

@Component({
  selector: 'app-date-form',
  templateUrl: './date-form.component.html',
  styleUrls: ['./date-form.component.css'],
})
export class DateFormComponent implements OnInit {
  dateForm: FormGroup = new FormGroup({
    dateStart: new FormControl(null, [Validators.required]),
    dateEnd: new FormControl(null, [Validators.required]),
  });

  constructor(public facturasEmitidasService: FacturasEmitidasService) {}

  ngOnInit(): void {}

  getFacturas() {
    let dates: DateForm = this.dateForm.value

    let facturas$: Observable<any> = this.facturasEmitidasService.getFacturasEmitidasFromAPI(dates.dateStart, dates.dateEnd)

    facturas$.subscribe((response) => {

      if(response?.status === 1) {
        this.facturasEmitidasService.setFacturasEmitidas(response.entity)
      }
    })
  }
}
