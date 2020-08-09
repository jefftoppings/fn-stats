import {Component, OnInit} from '@angular/core';
import {StatsService} from './stats.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
  providers: [StatsService]
})
export class StatsComponent implements OnInit {
  playerStats$: Observable<any>;

  constructor(private statsService: StatsService) {
  }

  ngOnInit(): void {
    this.playerStats$ = this.statsService.playerStats$;
  }

  searchGamerTag(value: string) {
    this.statsService.search(value);
  }
}
