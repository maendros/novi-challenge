import { MovieDetails } from "./../../models/movie-details";
import { Component, OnInit, Inject } from "@angular/core";
import { MoviesApiService } from "src/app/services/movies-api.service";
import { ActivatedRoute } from "@angular/router";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.css"]
})
export class DetailsComponent implements OnInit {
  movieDetails: MovieDetails = new MovieDetails();
  showSuccess: boolean;
  url = "https://image.tmdb.org/t/p/w500";
  languages = [];
  constructor(
    private moviesApiService: MoviesApiService,
    private route: ActivatedRoute,
    public dialogRef: MatDialogRef<DetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
    //  this.route.params.subscribe(params => {
    this.moviesApiService.searchMovieById(this.data.id).subscribe(res => {
      console.log(res);
      this.movieDetails = res;
      this.languages = [...res.spoken_languages];
      console.log(this.languages);
      this.movieDetails.poster_path =
        this.movieDetails.poster_path === null
          ? "./../../../assets/placeholder.png"
          : this.url + this.movieDetails.poster_path;
    
      //  console.log(this.movieDetails);
    });
    //   });
  }
  onRate() {
    this.moviesApiService.getGuestSession(7.0).subscribe(res => {
      if (res["status_code"] === 1) {
        this.showSuccess = true;
        setTimeout(() => {
          this.showSuccess = false;
        }, 2000);
      }
    });
  }
}

export interface DialogData {
  id: number;
}
