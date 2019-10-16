import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServisService } from 'src/app/servis.service';

@Component({
  selector: 'app-escritorio',
  templateUrl: './escritorio.component.html',
  styleUrls: ['./escritorio.component.css']
})
export class EscritorioComponent implements OnInit {
  form: FormGroup = new FormGroup({
    bloque: new FormControl('', Validators.required),
    turno: new FormControl('', Validators.required),
    tipo_estudio: new FormControl('', Validators.required)
  });
  mostrarTabla = false;
  ocultar = false;
  dataBloque: String;
  dataTurno: String;
  dataTipo_estudio: String;
  rt: String;
  tp: any;
  constructor(
    private servicio: ServisService
  ) { }

  ngOnInit() { }

  onSubmit() {
    this.ocultar = true;
    this.mostrarTabla = false;
    this.servicio.bloqueHoras = [];
    const data = this.form.value;
    this.servicio.getBloquesHoras(data.bloque, data.turno, data.tipo_estudio).subscribe(
      resp => {
        if (resp.length > 0) {
          this.servicio.bloqueHoras = resp;
          this.mostrarTabla = true;
        }
        this.dataBloque = data.bloque;
        this.dataTurno = data.turno;
        this.dataTipo_estudio = data.tipo_estudio;
        if (this.dataTurno === 'M') {
          this.rt = 'MATUTINO';
        } else if (this.dataTurno === 'V') {
          this.rt = 'VESPERTINO';
        } else if (this.dataTurno === 'N') {
          this.rt = 'NOCTURNO';
        }
        if (this.dataTipo_estudio === '1') {
          this.tp = 'PREGRADO';
        } else if (this.dataTipo_estudio === '2') {
          this.tp = 'POSGRADO';
        } else if (this.dataTipo_estudio === '3') {
          this.tp = 'EXTENSION';
        }
      },
      err => console.log(err)
    );
    // this.servicio.test().subscribe(
    //   bloques => {
    //     this.servicio.bloqueHoras = bloques;
    //     this.mostrarTabla = true;
    //   },
    //   err => console.log(err)
    // );
  }

}
