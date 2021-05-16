import { Component, OnDestroy, OnInit } from '@angular/core';

import { MovieService } from '../../services/movie/movie.service';
import { WatchListService } from '../../services/watch-list/watch-list.service';

import { IMovie } from '../../models/IMovie';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.scss']
})
export class WatchListComponent implements OnInit, OnDestroy {
  subscription$: Subscription;

  watchList: IMovie[] = [];

  constructor(
    private _watchListService: WatchListService,
    private _router: Router,
  ) { }

  ngOnInit() {
    this.subscription$ = this._watchListService.getWatchList().subscribe(list => this.watchList = list);
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }

  handleNavigateToDetails(movieId: number): void {
    this._router.navigate(['dashboard', 'movie', movieId]);
  }
}
