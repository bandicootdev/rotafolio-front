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

  constructor(
    private servicio: ServisService
  ) { }

  ngOnInit() { }

  onSubmit() {
    this.ocultar = true;
    this.mostrarTabla = false;
    this.servicio.bloqueHoras = [];
    const data = this.form.value;
    // this.servicio.getBloquesHoras(data.bloque, data.turno, data.tipo_estudio).subscribe(
    //   resp => {
    //     if (resp.length > 0) {
    //       this.servicio.bloqueHoras = resp;
    //       this.mostrarTabla = true;
    //     }
    //   },
    //   err => console.log(err)
    // );
    this.servicio.test().subscribe(
      bloques => {
        this.servicio.bloqueHoras = bloques;
        this.mostrarTabla = true;
      },
      err => console.log(err)
    );
  }

}
