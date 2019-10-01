import { Injectable, EventEmitter } from '@angular/core';
import { valorReloj } from '../models/reloj.model';
import { timer, Subject, Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class XsegundoService {
  onTick = new EventEmitter<Date>();

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
      this.infofecha$.next(t);
    });
    return this.infofecha$.asObservable();
  }
}
