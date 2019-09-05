import { MoviesApiService } from "./../../services/movies-api.service";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { PageEvent } from "@angular/material/paginator";
import { MoviesResults } from "src/app/models/movies-results";
import { MatDialog } from "@angular/material/dialog";
import { DetailsComponent } from "../details/details.component";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  searchForm: FormGroup;
  pagingIndicator = 1;
  movies: MoviesResults[] = [];
  length: number;
  pageSize: number;
  showPaginator: boolean;
  pageEvent: PageEvent;
  url = "https://image.tmdb.org/t/p/w500";
  // https://image.tmdb.org/t/p/w500/
  constructor(
    private moviesApiService: MoviesApiService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.searchForm = new FormGroup({
      "search-input": new FormControl("")
    });
  }

  openDialog(movieId): void {
    const dialogRef = this.dialog.open(DetailsComponent, {
      width: "750px",
      data: { id: movieId }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
    });
  }
  onSearch(event?: PageEvent) {
    if (
      this.searchForm.valid &&
      this.searchForm.value["search-input"].length > 3
    ) {
      if (event) {
        this.pagingIndicator = event.pageIndex + 1;
      }
      this.moviesApiService
        .searchMovies(
          this.searchForm.value["search-input"],
          this.pagingIndicator
        )
        .subscribe(res => {
          //   console.log(res)
          this.showPaginator = true;
          this.movies = [...res.results];
          this.length = res.total_results;
          this.pageSize = res.results.length;
          this.movies.forEach(item => {
            item.poster_path =
              item.poster_path === null
                ? "./../../../assets/placeholder.png"
                : this.url + item.poster_path;
          });
          // console.log(this.movies);
        });
    }
  }
}
