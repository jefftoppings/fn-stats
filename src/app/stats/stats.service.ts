import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {take} from 'rxjs/operators';
import {API_KEY} from '../apiKey';

@Injectable()
export class StatsService {
  private playerStats$$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public readonly playerStats$: Observable<any> = this.playerStats$$.asObservable();

  constructor(private http: HttpClient) { }

  search(platform, value: string) {
    console.log(platform, value);
    const url = `https://api.fortnitetracker.com/v1/profile/${platform}/${value}`;
    const httpHeaders: HttpHeaders = new HttpHeaders({
      'TRN-Api-Key': API_KEY
    });
    console.log(httpHeaders);
    this.http.get(url, {headers: httpHeaders}).pipe(
      take(1)
    ).subscribe(resp => this.playerStats$$.next(resp));
  }
}
