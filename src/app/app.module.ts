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

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MovieServiceProvider } from '../providers/movie-service/movie-service';

@NgModule({
  declarations: [
    MyApp,
    UnwatchedPage,
    AchievementsPage,
    HomePage,
    TabsPage,
    ItemDetailPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    UnwatchedPage,
    AchievementsPage,
    HomePage,
    TabsPage,
    ItemDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HTTP,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MovieServiceProvider
  ]
})
export class AppModule {}
