import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../../../../environments/environment';

import { IMovie } from '../../models/IMovie';

export type sectionType = 'popular' | 'now_playing' | 'top_rated' | 'upcoming';

export interface IGetMoviesBySectionDTO {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

// FIXME: MOVER API KEY PARA ARQUIVO DE VARIÁVEIS DE AMBIENTE
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private readonly baseURL = environment.apiUrl;

  constructor(private _httpClient: HttpClient) {}

  getMoviesBySection(section: sectionType): Promise<IGetMoviesBySectionDTO> {
    return this._httpClient
      .get<IGetMoviesBySectionDTO>(`${this.baseURL}/movie/${section}?api_key=abaa5e7b3816cf6a4e786fdf10783879`)
      .toPromise();
  }

  getMovieById(movieId: number): Promise<IMovie> {
    return this._httpClient
      .get<IMovie>(`${this.baseURL}/movie/${movieId}?api_key=abaa5e7b3816cf6a4e786fdf10783879`)
      .toPromise();
  }
}
