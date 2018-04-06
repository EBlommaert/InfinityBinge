import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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

  original_title;
  poster_path;
  backdrop_path;
  vote_average;
  overview;
  genre_ids

  constructor(public navParams: NavParams, public navCtrl: NavController ) {

  }

  ionViewDidLoad() {

    this.original_title = this.navParams.get('movie').original_title;
    this.poster_path = this.navParams.get('movie').poster_path;
    this.backdrop_path = this.navParams.get('movie').backdrop_path;
    this.vote_average = this.navParams.get('movie').vote_average;
    this.genre_ids = this.navParams.get('movie').genre_ids;
    this.overview = this.navParams.get('movie').overview;
  }


}
