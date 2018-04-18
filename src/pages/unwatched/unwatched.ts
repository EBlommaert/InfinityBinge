import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ItemDetailPage } from '../item-detail/item-detail';
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

  public moviesPhase1: any;
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
  isWatched = false;

  constructor(
    public navParams: NavParams,
    public navCtrl: NavController, 
    public MovieServiceProvider: MovieServiceProvider, 
    public watchedProvider: WatchedProvider) {  
      
    this.getUnwatchedMoviesPhase1();   
  }

  getUnwatchedMoviesPhase1() {    
    this.MovieServiceProvider.getMoviesPhase1()
    .then(data => {
      this.moviesPhase1 = data;
    });  
  }

  viewItem(movie) {
    this.navCtrl.push(ItemDetailPage, {
      movie:movie
    });
  }
  
}
