import { Component, Input, Output, EventEmitter } from '@angular/core';

import { IMovie } from '../../models/IMovie';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Output() onRequestNavigateToDetails = new EventEmitter<number>();
  @Output() onRequestAddToWatchList = new EventEmitter<number>();

  @Input() movie: IMovie;

  handleRequestNavigateToDetails(movieId: number): void {
    this.onRequestNavigateToDetails.emit(movieId);
  }

  handleRequestAddToWatchList(movieId: number): void {
    this.onRequestAddToWatchList.emit(movieId);
  }
}
