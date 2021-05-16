import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IGenre } from '../../models/IGenre';
import { IMovie } from '../../models/IMovie';

@Component({
  selector: 'app-card-mini',
  templateUrl: './card-mini.component.html',
  styleUrls: ['./card-mini.component.scss']
})
export class CardMiniComponent implements OnInit {
  @Output() onRequestNavigateToDetails = new EventEmitter<number>();

  @Input() movie: IMovie;

  movieGenres: string;

  ngOnInit() {
    this.movieGenres = this.movie.genres.map(genre => genre.name).join(', ');
  }

  handleRequestNavigateToDetails(movieId: number): void {
    this.onRequestNavigateToDetails.emit(movieId);
  }
}
