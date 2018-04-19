import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ItemDetailPage } from '../item-detail/item-detail';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { MovieServiceProvider } from '../../providers/movie-service/movie-service';
import { UnwatchedProvider } from '../../providers/unwatched/unwatched';
@Component({
  selector: 'page-unwatched',
  templateUrl: 'unwatched.html',
  providers: [MovieServiceProvider]
})
export class UnwatchedPage {

  public movies: any;
  public moviesPhase2: any;
  public moviesPhase3: any;  
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
  isUnwatched = false;

  constructor(
    public navParams: NavParams,
    public navCtrl: NavController, 
    public MovieServiceProvider: MovieServiceProvider, 
    public unwatchedProvider: UnwatchedProvider) {  
      
    this.getUnwatchedMovies();   
  }

  getUnwatchedMovies() {    
    this.unwatchedProvider.getAllUnWatchedMoviesIds()
    .then(data => {
      this.movies = data;
    });  
  }

  viewItem(movie) {
    this.navCtrl.push(ItemDetailPage, {
      movie:movie
    });
  }
  
}
