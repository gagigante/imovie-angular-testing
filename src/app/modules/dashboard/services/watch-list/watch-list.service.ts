import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { IMovie } from '../../models/IMovie';

@Injectable({
  providedIn: 'root'
})
export class WatchListService {

  private readonly watchList$ = new BehaviorSubject<IMovie[]>([]);

  getWatchList(): BehaviorSubject<IMovie[]> {
    return this.watchList$;
  }

  addToList(movie: IMovie): void {
    const items = this.watchList$.value;

    const itemIndex = items.findIndex(item => item.id === movie.id);

    if (itemIndex < 0) {
      this.watchList$.next([...this.watchList$.value, movie]);
    }
  }
}
