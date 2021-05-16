import { Component, Input, OnInit } from '@angular/core';

import { IGetMoviesBySectionDTO, MovieService, sectionType } from '../../services/movie/movie.service';

import { IMovie } from '../../models/IMovie';
import { Router } from '@angular/router';
import { WatchListService } from '../../services/watch-list/watch-list.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  @Input() sectionType: sectionType;
  @Input() sectionTitle = '';

  movies: IMovie[] = [];

  isLoading = true;

  constructor(
    private _movieService: MovieService,
    private _watchListService: WatchListService,
    private _router: Router,
  ) { }

  ngOnInit() {
    this.fetchMovies(this.sectionType).then(({ results }) => {
      this.movies = results;
      this.isLoading = false;
    });
  }

  fetchMovies(section: sectionType): Promise<IGetMoviesBySectionDTO> {
    return this._movieService.getMoviesBySection(section);
  }

  handleNavigateToDetails(movieId: number): void {
    console.log('entrou')
    this._router.navigate(['dashboard', 'movie', movieId]);
  }

  async handleAddToWatchList(movieId: number): Promise<void> {
    const movie = await this._movieService.getMovieById(movieId);

    this._watchListService.addToList(movie);
  }
}
