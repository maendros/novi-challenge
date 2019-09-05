import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Movies } from "../models/movies";
import { MovieDetails } from "../models/movie-details";
import { concatMap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class MoviesApiService {
  // "https://api.themoviedb.org/3/search/movie?api_key=85204a8cc33baf447559fb6d51b18313&language=en-US&query=star%20wars&page=1&include_adult=false"
  apiURL: string =
    "https://api.themoviedb.org/3/search/movie?api_key=85204a8cc33baf447559fb6d51b18313&language=en-US&query=";
  movieByIdUrl = "https://api.themoviedb.org/3/movie/";
  guestUrl =
    "https://api.themoviedb.org/3/authentication/guest_session/new?api_key=85204a8cc33baf447559fb6d51b18313";
  postUrl =
    "https://api.themoviedb.org/3/movie/54320/rating?api_key=85204a8cc33baf447559fb6d51b18313&guest_session_id=";

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json;charset=utf-8"
    })
  };

  constructor(private httpClient: HttpClient) {}

  public searchMovies(searchedMovie: string, pageInd: number) {
    return this.httpClient.get<Movies>(
      this.apiURL + searchedMovie + "&page=" + pageInd + "&include_adult=false"
    );
  }
  public searchMovieById(movieId: number) {
    return this.httpClient.get<MovieDetails>(
      this.movieByIdUrl +
        movieId +
        "?api_key=85204a8cc33baf447559fb6d51b18313&language=en-US"
    );
  }
  public getGuestSession(value: number) {
    return this.httpClient
      .get(this.guestUrl)
      .pipe(
        concatMap(res =>
          this.httpClient.post(
            this.postUrl + res["guest_session_id"],
            { value: value },
            this.httpOptions
          )
        )
      );
  }
}
