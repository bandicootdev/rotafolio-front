import { Component, OnInit } from '@angular/core';
import { valorReloj } from '../../models/reloj.model';
import { Observable } from 'rxjs';
import { XsegundoService } from '../../reloj/xsegundo.service';

@Component({
  selector: 'app-reloj',
  templateUrl: './reloj.component.html',
  styleUrls: ['./reloj.component.css']
})
export class RelojComponent implements OnInit {
  datos$: Observable<Date>;
  fecha = new Date();
  hoy = new Date();
  etv;
  etv1;
  etv2;
  etv3;
  constructor(
    private segundo: XsegundoService,
    private x: XsegundoService
  ) {}

  ngOnInit() {
    this.datos$ = this.segundo.getInfoReloj();
    this.datos$.subscribe(x => {
      this.segundo.onTick.emit(x);
      this.fecha = x;
      //console.log(this.fecha);
      var d = new Date();
      var days = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
      var month = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
      this.etv = this.hoy.getFullYear();
      this.etv1 = month[this.hoy.getMonth()]; 
      this.etv2 = days[this.hoy.getDay()];  
    });
  }
}
