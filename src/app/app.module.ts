import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HTTP } from '@ionic-native/http';
import { UnwatchedPage } from '../pages/unwatched/unwatched';
import { AchievementsPage } from '../pages/achievements/achievements';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ItemDetailPage } from '../pages/item-detail/item-detail';
import { PhasesPage } from '../pages/phases/phases';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MovieServiceProvider } from '../providers/movie-service/movie-service';
import { WatchedProvider } from '../providers/watched/watched';
import { IonicStorageModule } from '@ionic/storage';
import { Badge } from '@ionic-native/badge';
import { UnwatchedProvider } from '../providers/unwatched/unwatched';
@NgModule({
  declarations: [
    MyApp,
    UnwatchedPage,
    AchievementsPage,
    HomePage,
    TabsPage,
    ItemDetailPage,
    PhasesPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    UnwatchedPage,
    AchievementsPage,
    HomePage,
    TabsPage,
    ItemDetailPage,
    PhasesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Badge,
    HTTP,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MovieServiceProvider,
    WatchedProvider,
    UnwatchedProvider
  ]
})
export class AppModule {}
