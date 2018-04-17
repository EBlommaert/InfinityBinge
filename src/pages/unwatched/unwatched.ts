import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { MovieServiceProvider } from '../../providers/movie-service/movie-service';
import { WatchedProvider } from '../../providers/watched/watched';
@Component({
  selector: 'page-unwatched',
  templateUrl: 'unwatched.html',
  providers: [MovieServiceProvider]
})
export class UnwatchedPage {

  public unwatchedMoviesPhase1: any;
  public unwatchedMoviesPhase2: any;
  public unwatchedMoviesPhase3: any;  
  movie: any;
  original_title;
  poster_path;
  backdrop_path;
  vote_average;
  id;
  overview;
  genre_ids;
  release_date;
  original_language;
  film: any;
  isWatched = false;

  constructor(public navParams: NavParams, public navCtrl: NavController, public MovieServiceProvider: MovieServiceProvider, public watchedProvider: WatchedProvider) {
    this.movie = this.navParams.get('movie');
    this.watchedProvider.isWatched(this.movie.id).then(isWatch => {
      this.isWatched = isWatch;
    })
    this.getUnwatchedMoviesPhase1();
    this.getUnwatchedMoviesPhase2();
    this.getUnwatchedMoviesPhase3();
  }

  getUnwatchedMoviesPhase1() {
    this.MovieServiceProvider.getMoviesPhase1()
    .then(data => {
      this.unwatchedMoviesPhase1 = data;
    });
  }

  getUnwatchedMoviesPhase2() {
    this.MovieServiceProvider.getMoviesPhase2()
    .then(data => {
      this.unwatchedMoviesPhase2 = data;
    });
  }

  getUnwatchedMoviesPhase3() {
    this.MovieServiceProvider.getMoviesPhase2()
    .then(data => {
      this.unwatchedMoviesPhase3 = data;
    });
  }

}
