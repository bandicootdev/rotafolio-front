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
  horan: Date;

  constructor(
    private bloqueService: ServisService,
    private x: XsegundoService
  ) { }

  ngOnInit() {
    const bloques = this.bloqueService.bloqueHoras;
    console.log(bloques);
    this.horan = new Date('11:55:00 GMT-0427')
    var date = new Date();
    var hours = date.getHours();
    var ampm = hours >= 12 ? 'pm' : 'am';
    this.x.onTick.subscribe((x: Date) => {
      this.hora = x;
      //console.log('-> '+x)
      this.bloques = bloques.filter(elem => {
        const horaSalida = new Date(elem.hora_salida);
        const horaEntrada = new Date(elem.hora_entrada);
        const turno = elem.turno;
        //console.log(horaSalida) 
        if (this.hora >= horaSalida) {
            console.log('1 if');
            return false;
          }
          else {
            console.log('else');
            return true;
          }      
      });
    });
  }
}

