import {Component, OnDestroy, OnInit} from '@angular/core';
import {StatsService} from './stats.service';
import {Observable, Subscription} from 'rxjs';
import {MatRadioChange} from '@angular/material/radio';

enum InputRadio {
  CONTROLLER = 'gamepad',
  KEYBOARD_MOUSE = 'kbm',
  TOUCH = 'touch'
}

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
  providers: [StatsService]
})
export class StatsComponent implements OnInit, OnDestroy {
  playerStats$: Observable<any>;
  inputRadio = InputRadio;
  inputRadioValue: InputRadio = InputRadio.CONTROLLER;

  private subscriptions: Subscription[] = [];

  constructor(private statsService: StatsService) {
  }

  ngOnInit(): void {
    this.playerStats$ = this.statsService.playerStats$;
    this.subscriptions.push(this.playerStats$.subscribe(console.log));
  }

  searchGamerTag(value: string) {
    this.statsService.search(this.inputRadioValue, value);
  }

  inputRadioChanged(event: MatRadioChange) {
    this.inputRadioValue = event.value;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
