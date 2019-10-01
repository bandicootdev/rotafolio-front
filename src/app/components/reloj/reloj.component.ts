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

  constructor(
    private segundo: XsegundoService,
    private x: XsegundoService
  ) { }

  ngOnInit() {
    this.datos$ = this.segundo.getInfoReloj();
    this.datos$.subscribe(x => {
      this.segundo.onTick.emit(x);
      this.fecha = x;
    });
  }
}
