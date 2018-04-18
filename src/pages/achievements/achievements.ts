import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Badge } from '@ionic-native/badge';

@Component({
  selector: 'page-achievements',
  templateUrl: 'achievements.html'
})
export class AchievementsPage {

  constructor(public navCtrl: NavController, private badge: Badge) {

  }

   ionViewDidLoad() {
    try {
      let badge = this.badge.clear();
      console.log(badge);
    }
    catch(e){
      console.error(e);
    }

  }

}
