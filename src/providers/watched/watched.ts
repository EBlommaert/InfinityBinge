import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

const STORAGE_KEY = 'watchedMovies';

@Injectable()
export class WatchedProvider {

  constructor(public storage: Storage) {
    console.log('Hello WatchedProvider Provider');
  }

  isWatched(id) {
    return this.getAllWatchedMovies().then(result => {
      return result && result.indexOf(id) !== -1;
    });
  }

  markAsWatched(id) {
    return this.getAllWatchedMovies().then(result => {
      if (result) {
        result.push(id);
        return this.storage.set(STORAGE_KEY, result);
      } else {
        return this.storage.set(STORAGE_KEY, result);
      }
    });
  }

  markAsUnwatched(id) {
    return this.getAllWatchedMovies().then(result => {
      if (result) {
        var index = result.indexOf(id);
        result.splice(index, 1);
        return this.storage.set(STORAGE_KEY, result);
      }
    });
  }

  getAllWatchedMovies() {
    return this.storage.get(STORAGE_KEY);
  }
}
