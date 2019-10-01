import { Component, OnInit } from '@angular/core';
import { ServisService } from 'src/app/servis.service';
import { BloqueHora } from 'src/app/models/bloque-hora.model';
import { XsegundoService } from 'src/app/reloj/xsegundo.service';

@Component({
  selector: 'app-dos',
  templateUrl: './dos.component.html',
  styleUrls: ['./dos.component.css']
})

export class DosComponent implements OnInit {
  bloques: BloqueHora[];
  hora: Date;

  constructor(
    private bloqueService: ServisService,
    private x: XsegundoService
  ) { }

  ngOnInit() {
    const bloques = this.bloqueService.bloqueHoras;

    this.x.onTick.subscribe((x: Date) => {
      this.hora = x;

      this.bloques = bloques.filter(elem => {
        const horaSalida = new Date(elem.hora_salida);
        if (this.hora >= horaSalida) {
          return false;
        } else {
          return true;
        }
      });
    });
  }
}

