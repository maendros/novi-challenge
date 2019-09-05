import { MoviesResults } from "./movies-results";

export class Movies {
  results: MoviesResults[];
  page: number;
  total_pages: number;
  total_results: number;

  constructor() {
    this.results = [];
  }
}
