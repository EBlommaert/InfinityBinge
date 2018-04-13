import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WatchedProvider } from '../../providers/watched/watched';

/**
 * Generated class for the ItemDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html',
})

export class ItemDetailPage {
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

  constructor(public navParams: NavParams, public navCtrl: NavController, public watchedProvider: WatchedProvider ) {
    this.movie = this.navParams.get('movie');
    this.watchedProvider.isWatched(this.movie.id).then(isWatch => {
      this.isWatched = isWatch;
    })
  }

  markWatched() {
    this.watchedProvider.markWatched(this.movie.id).then(() => {
      this.isWatched = true;
    });
  }
 
  markUnwatched() {
    this.watchedProvider.markUnwatched(this.movie.id).then(() => {
      this.isWatched = false;
    });
  }

  ionViewDidLoad() {

    this.original_title = this.navParams.get('movie').original_title;
    this.poster_path = this.navParams.get('movie').poster_path;
    this.backdrop_path = this.navParams.get('movie').backdrop_path;
    this.vote_average = this.navParams.get('movie').vote_average;
    this.genre_ids = this.navParams.get('movie').genre_ids;
    this.id = this.navParams.get('movie').id;
    this.release_date = this.navParams.get('movie').release_date;
    this.original_language = this.navParams.get('movie').original_language;
    this.overview = this.navParams.get('movie').overview;
  }


}
