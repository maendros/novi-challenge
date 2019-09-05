export class MovieDetails {

    poster_path: string;
    overview: string;
    budget: string;
    release_date: string;
    revenue: string;
    vote_average: string;
    vote_count: string;
    spoken_languages: [];
    title: string;
   
  
    constructor() {
      this.poster_path = "";
      this.overview = "";
      this.budget = "";
      this.release_date = "";
      this.vote_average = "";
      this.vote_count = "";
      this.spoken_languages = [];
      this.title = "";
  
    }
}
