import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { MovieServiceProvider } from '../../providers/movie-service/movie-service';

const STORAGE_KEY = 'watchedMovies';

@Injectable()
export class WatchedProvider {

  constructor(public storage: Storage, public MovieServiceProvider: MovieServiceProvider) {
    console.log('Hello WatchedProvider Provider');
  }

  isWatched(filmId) {
    return this.getAllWatchedMovies().then(result => {
      return result && result.indexOf(filmId) !== -1;
    });
  }
 
  markWatched(filmId) {
    return this.getAllWatchedMovies().then(result => {
      if (result) {
        result.push(filmId);
        return this.storage.set(STORAGE_KEY, result);
      } else {
        return this.storage.set(STORAGE_KEY, [filmId]);
      }
    });
  }
 
  markUnwatched(filmId) {
    return this.getAllWatchedMovies().then(result => {
      if (result) {
        var index = result.indexOf(filmId);
        result.splice(index, 1);
        return this.storage.set(STORAGE_KEY, result);
      }
    });
  }
 
  getAllWatchedMovies() {
    return this.storage.get(STORAGE_KEY);
  }
}
