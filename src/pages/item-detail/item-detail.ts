import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WatchedProvider } from '../../providers/watched/watched';
import { UnwatchedProvider } from '../../providers/unwatched/unwatched';
import { Badge } from '@ionic-native/badge';
import { ToastController } from 'ionic-angular';

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
  isUnwatched = true;

  constructor(public toastCtrl: ToastController,public navParams: NavParams, public navCtrl: NavController, public unwatchedprovider: UnwatchedProvider, public watchedProvider: WatchedProvider, private badge: Badge ) {
    this.movie = this.navParams.get('movie');
    this.watchedProvider.isWatched(this.movie.id).then(isWatch => {
      this.isWatched = isWatch;
    })
    this.unwatchedprovider.isUnwatched(this.movie.id).then(isUnWatch => {
      this.isUnwatched = isUnWatch;
    })
  }

  requestPermission() {
    try {
      let hasPermission = this.badge.hasPermission();
      console.log(hasPermission);
      if (!hasPermission) {
        let permission = this.badge.requestPermission();
        console.log(permission);
      }
    } catch (e) {
      console.error(e);
    }
  }

  markWatched(badgeNumber: number) {
    this.watchedProvider.markWatched(this.movie.id).then(() => {
      this.isWatched = true;
    });
    this.unwatchedprovider.markWatched(this.movie.id).then(() => {
      this.isUnwatched = false;
    });
    try {
      let badges = this.badge.set(badgeNumber);
      console.log(badges);
    } catch (e) {
      console.error(e);
    }

    if(this.movie.id == "1771") {     
        let toast = this.toastCtrl.create({
          message: 'And so it Begins',
          duration: 3000,
          position: 'top',
          cssClass: 'toaster'
        });
        toast.present();      
    } else if(this.movie.id == "10138") {
      let toast = this.toastCtrl.create({
        message: 'Together we stand strong',
        duration: 3000,
        position: 'top',
        cssClass: 'toaster'
      });
      toast.present();    
    }
    else if(this.movie.id == "1724") {
      let toast = this.toastCtrl.create({
        message: 'You do not want to see me angry',
        duration: 3000,
        position: 'top',
        cssClass: 'toaster'
      });
      toast.present();    
    }
    else if(this.movie.id == "1726") {
      let toast = this.toastCtrl.create({
        message: 'I am Iron Man',
        duration: 3000,
        position: 'top',
        cssClass: 'toaster'
      });
      toast.present();    
    }
    else if(this.movie.id == "10195") {
      let toast = this.toastCtrl.create({
        message: 'You have proven me worthy',
        duration: 3000,
        position: 'top',
        cssClass: 'toaster'
      });
      toast.present();    
    }
    else if(this.movie.id == "24428") {
      let toast = this.toastCtrl.create({
        message: 'When aliens fall out of the sky',
        duration: 3000,
        position: 'top',
        cssClass: 'toaster'
      });
      toast.present();    
    }
    else if(this.movie.id == "100402") {
      let toast = this.toastCtrl.create({
        message: 'Round 2, fight',
        duration: 3000,
        position: 'top',
        cssClass: 'toaster'
      });
      toast.present();    
    }
    else if(this.movie.id == "68721") {
      let toast = this.toastCtrl.create({
        message: 'Ooh that is hot!',
        duration: 3000,
        position: 'top',
        cssClass: 'toaster'
      });
      toast.present();    
    }
    else if(this.movie.id == "76338") {
      let toast = this.toastCtrl.create({
        message: 'The subtle art of deceipt',
        duration: 3000,
        position: 'top',
        cssClass: 'toaster'
      });
      toast.present();    
    }
    else if(this.movie.id == "99861") {
      let toast = this.toastCtrl.create({
        message: 'I got no strings attached',
        duration: 3000,
        position: 'top',
        cssClass: 'toaster'
      });
      toast.present();    
    }
    else if(this.movie.id == "118340") {
      let toast = this.toastCtrl.create({
        message: 'Hooked on a feeling',
        duration: 3000,
        position: 'top',
        cssClass: 'toaster'
      });
      toast.present();    
    }
    else if(this.movie.id == "283995") {
      let toast = this.toastCtrl.create({
        message: 'I am your father',
        duration: 3000,
        position: 'top',
        cssClass: 'toaster'
      });
      toast.present();    
    }
    else if(this.movie.id == "102899") {
      let toast = this.toastCtrl.create({
        message: 'I have beaten an Avenger',
        duration: 3000,
        position: 'top',
        cssClass: 'toaster'
      });
      toast.present();    
    }
    else if(this.movie.id == "271110") {
      let toast = this.toastCtrl.create({
        message: 'Let us talk it out',
        duration: 3000,
        position: 'top',
        cssClass: 'toaster'
      });
      toast.present();    
    }
    else if(this.movie.id == "284053") {
      let toast = this.toastCtrl.create({
        message: 'More like a campfire',
        duration: 3000,
        position: 'top',
        cssClass: 'toaster'
      });
      toast.present();    
    }
    else if(this.movie.id == "284054") {
      let toast = this.toastCtrl.create({
        message: 'It is gonna take a lot to take me away from you',
        duration: 3000,
        position: 'top',
        cssClass: 'toaster'
      });
      toast.present();    
    }
    else if(this.movie.id == "284052") {
      let toast = this.toastCtrl.create({
        message: 'Time is on your side',
        duration: 3000,
        position: 'top',
        cssClass: 'toaster'
      });
      toast.present();    
    }
    else if(this.movie.id == "315635") {
      let toast = this.toastCtrl.create({
        message: 'Dismiss the trainigwheels program',
        duration: 3000,
        position: 'top',
        cssClass: 'toaster'
      });
      toast.present();    
    }
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
