import {Component, OnInit} from '@angular/core';
import {ServisService} from 'src/app/servis.service';
import {BloqueHora} from 'src/app/models/bloque-hora.model';
import {XsegundoService} from 'src/app/reloj/xsegundo.service';
import {consoleTestResultHandler} from "tslint/lib/test";


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
    ) {
    }

    ngOnInit() {
        const bloques = this.bloqueService.bloqueHoras;
        console.log(bloques);
        this.x.onTick.subscribe((x: Date) => {
            this.hora = x;
            // console.log('-> '+x)
            this.bloques = bloques.filter(elem => {
                const horaSalida = new Date(elem.hora_salida);
                const horaEntrada = new Date(elem.hora_entrada);
                const turno = elem.turno;
                const condicion = elem.condicion;
                if (this.hora >= horaSalida) {
                    return false;
                } else {
                    return true;
                }
            });
        });
    }
}


