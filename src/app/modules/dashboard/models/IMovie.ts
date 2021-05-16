import { IGenre } from "./IGenre";

export interface IMovie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  release_date: string;
  genres: IGenre[]
}
