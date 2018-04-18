import { Component } from '@angular/core';

import { UnwatchedPage } from '../unwatched/unwatched';
import { AchievementsPage } from '../achievements/achievements';
import { HomePage } from '../home/home';
import { Badge } from '@ionic-native/badge';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = UnwatchedPage;
  tab3Root = AchievementsPage;

  constructor(private badge: Badge) {

  }
   getBadges() {
    try {
      let badgeAmount = this.badge.get();
      console.log(badgeAmount);
    }
    catch (e) {
      console.error(e);
    }
  }
}
