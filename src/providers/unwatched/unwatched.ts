import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { MovieServiceProvider } from '../../providers/movie-service/movie-service';
import { WatchedProvider } from '../../providers/watched/watched';

const STORAGE_KEY = 'unwatchedmovies';
const STORAGE_KEY_WATCHED = 'watchedmovies';
/*
  Generated class for the UnwatchedProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UnwatchedProvider {
  
  allMovies: [
    1724,
    24428, 
    10138, 
    10195, 
    1726, 
    1771, 
    68721, 
    283995, 
    99861, 
    100402, 
    118340, 
    76338, 
    102899, 
    315635, 
    271110, 
    284052,
    284053,
    284054
  ];
    
  
  constructor(public watchedProvider: WatchedProvider, public storage: Storage, public MovieServiceProvider: MovieServiceProvider) {
    console.log('Hello UnwatchedProvider Provider');
  }

  isUnwatched(filmId) {
    return this.getAllUnWatchedMoviesIds().then(result => {
      return result && result.indexOf(filmId) !== -1;
    });
  }

  isWatched(filmId) {
    return this.getAllWatchedMovies().then(result => {
      return result && result.indexOf(filmId) !== -1;
    });
  }
 
  markWatched(filmId) {
    return this.getAllUnWatchedMoviesIds().then(result => {
      if (result) {
        var index = result.indexOf(filmId);
        result.splice(index, 1);
        return this.storage.set(STORAGE_KEY, result);
      }
    });
  }

  setAllUnwatchedMovies(filmId) {    
    return this.storage.set(STORAGE_KEY, [1724, 24428, 10138, 10195, 1726, 1771, 68721, 283995, 99861, 100402, 118340, 76338, 102899, 315635, 271110, 284052,284053,284054]) 
    .then(result => {
      if (result) {
        var index =result.indexOf(filmId);
        result.splice(index, 1);
        return this.storage.set(STORAGE_KEY, result);
      }
    });
  }

  getAllWatchedMovies() {
    return this.storage.get(STORAGE_KEY_WATCHED);
  }
   
  getAllUnWatchedMoviesIds() {
    return this.storage.get(STORAGE_KEY);
  }

}
