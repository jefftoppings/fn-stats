import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable()
export class StatsService {
  private playerStats$$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public readonly playerStats$: Observable<any> = this.playerStats$$.asObservable();

  constructor() { }

  search(value: string) {
    console.log(value);
  }
}
