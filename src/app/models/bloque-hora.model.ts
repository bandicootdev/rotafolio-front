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
export class BloqueHora {
    constructor(
        public idPersona: number,
        public identificacion: string,
        public docente: string,
        public seccion: string,
        public materia: string,
        public bloque: string,
        public aula: string,
        public turno: string,
        public hora_entrada: Date,
        public hora_salida: Date,
        public tipo_estudio: number,
        public condicion: string
    ) {
    }
}

/* <th>Hora</th>
                                    <th>Profesores</th>
                                    <th>Identificacion</th>
                                    <th>Materias</th>
                                    <th>Sección</th>
                                    <th>Aula</th>
                                    <th>Estatus</th> */
