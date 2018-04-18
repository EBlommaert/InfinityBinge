import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { ItemDetailPage } from '../item-detail/item-detail';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { MovieServiceProvider } from '../../providers/movie-service/movie-service';



@Component({
  selector: 'page-phases',
  templateUrl: 'phases.html',
  providers: [MovieServiceProvider]
})
export class PhasesPage {
  @ViewChild(Slides) slides: Slides;

  public moviesPhase1: any;
  public moviesPhase2: any;
  public moviesPhase3: any;    

  constructor(public navCtrl: NavController, public MovieServiceProvider: MovieServiceProvider) {
    this.getMoviesPhase1();
    this.getMoviesPhase2();
    this.getMoviesPhase3();    
  }


  getMoviesPhase1() {
    this.MovieServiceProvider.getMoviesPhase1()
    .then(data => {
      this.moviesPhase1 = data;
    });
  }

  getMoviesPhase2() {
    this.MovieServiceProvider.getMoviesPhase2()
    .then(data => {
      this.moviesPhase2 = data;
    });
  }

  getMoviesPhase3() {
    this.MovieServiceProvider.getMoviesPhase3()
    .then(data => {
      this.moviesPhase3 = data;
    });
  }

  viewItemPhase1(movie){
    this.navCtrl.push(ItemDetailPage, {
      movie:movie
    });
  }

  viewItemPhase2(movie){
    this.navCtrl.push(ItemDetailPage, {
      movie:movie
    });
  }

  viewItemPhase3(movie){
    this.navCtrl.push(ItemDetailPage, {
      movie:movie
    });
  }

  ionViewDidLoad() {

  }

}