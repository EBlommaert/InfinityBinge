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
  genre_ids
  isWatched = false;

  constructor(public navParams: NavParams, public navCtrl: NavController, public watchedProvider: WatchedProvider ) {
    this.id = this.navParams.get('movie');
    this.watchedProvider.isWatched(this.id).then(isWatched => {
      this.isWatched = isWatched;
    })
  }

  markAsWatched() {
    this.watchedProvider.markAsWatched(this.id).then(() => {
      this.isWatched = true;
    });
  }
 
  markAsUnwatched() {
    this.watchedProvider.markAsUnwatched(this.id).then(() => {
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
    this.overview = this.navParams.get('movie').overview;
  }


}
