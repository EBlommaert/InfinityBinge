import { Component } from '@angular/core';

import { UnwatchedPage } from '../unwatched/unwatched';
import { AchievementsPage } from '../achievements/achievements';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = UnwatchedPage;
  tab3Root = AchievementsPage;

  constructor() {

  }
}
