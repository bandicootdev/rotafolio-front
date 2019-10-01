import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BloqueHora } from './models/bloque-hora.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServisService {
  bloqueHoras: BloqueHora[];

  /* {
    "idPersona":45666,
    "idPeriodo":null,
    "identificacion":"16780077",
    "docente":"HAROLD ALBERTO MORENO VILLALOBOS",
    "seccion":"S713",
    "materia":"TELEVISIÓN",
    "bloque":"BLOQUE F",
    "aula":"CPA-01",
    "fecha":"2019-05-14 00:00:00.0",
    "turno":"N",
    "hora_entrada":"04:00:00",
    "hora_salida":"04:35:00",
    "retraso":null
  } */

  constructor(
    private http: HttpClient
  ) { }

  getBloquesHoras( bloque: string, turno: string, tipoEstudio: number) {
    return this.http.get(
      `${environment.apiBase}/${bloque}/${turno}/${tipoEstudio}`
    ) as Observable<BloqueHora[]>;
  }

  test() {
    return this.http.get(
      `http://localhost:3000/json`
    ) as Observable<BloqueHora[]>;
  }
}
