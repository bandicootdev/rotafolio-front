import { Injectable, EventEmitter } from '@angular/core';
import { valorReloj } from '../models/reloj.model';
import { timer, Subject, Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ConvertFrom24To12FormatPipe } from '../pipes/convert-from24-to12-format.pipe';
@Injectable({
  providedIn: 'root'
})
export class XsegundoService {
  onTick = new EventEmitter<Date>();
  hours: any;
  clock: Observable<Date>;
  infofecha$ = new Subject<Date>();
  constructor() {
    this.clock = timer(0, 1000).pipe(map(t => new Date()), shareReplay(1));
    
  }
  
  getInfoReloj(): Observable<Date> {
    this.clock.subscribe(t => {
      t.setDate(1);
      t.setMonth(0);
      t.setFullYear(1900);
      let time = t.getHours()+":"+t.getMinutes()+":"+t.getSeconds();
      let pipeHourFormat = new ConvertFrom24To12FormatPipe();
      this.hours = pipeHourFormat.transform(time);
      // console.log(this.hours)
      // t.setTime(this.hours)
      let prueba = this.hours.split(':');
      //console.log(typeof prueba[2]);
      t.setHours(Number(prueba[0]));
      t.setMinutes(Number(prueba[1]));
      // t.setSeconds(0);
      console.log(t);
      this.infofecha$.next(t);
    });
    return this.infofecha$.asObservable();
  }
}
