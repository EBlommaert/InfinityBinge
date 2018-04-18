import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { PhasesPage } from '../phases/phases';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { MovieServiceProvider } from '../../providers/movie-service/movie-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [MovieServiceProvider]
})

export class HomePage {
  @ViewChild(Slides) slides: Slides; 
  
 
  constructor(public navCtrl: NavController, public MovieServiceProvider: MovieServiceProvider) {
    
  }
  
  startBinge(){
    this.navCtrl.push(PhasesPage);
  }

  skipToBinge(){
    this.navCtrl.push(PhasesPage);
  }

  ionViewWillEnter() {
    let tabs = document.querySelectorAll('.tabbar');
    if ( tabs !== null ) {
      Object.keys(tabs).map((key) => {
        tabs[ key ].style.transform = 'translateY(56px)';
      });
    } // end if
  }

  ionViewDidLeave() {
    let tabs = document.querySelectorAll('.tabbar');
    if ( tabs !== null ) {
      Object.keys(tabs).map((key) => {
        tabs[ key ].style.transform = 'translateY(0)';
      });
    } // end if
  }

  ionViewDidLoad() {

  }

}
