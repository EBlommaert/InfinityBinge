import { HttpClient } from '@angular/common/http';
import { HTTP } from '@ionic-native/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
/*
  Generated class for the MovieServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieServiceProvider {

  apiUrl = 'https://api.themoviedb.org/3/list'
  apiKey = '?api_key=9e493b8e1d5cda98bb97c77029b786a0'

  constructor(private http: HttpClient) {
    console.log('Hello MovieServiceProvider Provider');
  }

  getMoviesPhase1() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/51602?api_key=9e493b8e1d5cda98bb97c77029b786a0&language=en-US&append_to_response=images&include_image_language=en,null')
        .subscribe(data => {
          this.data = data.items;
          resolve(this.data);
          console.log(data);
      });
    });
  }

  getMoviesPhase2() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/51605?api_key=9e493b8e1d5cda98bb97c77029b786a0&language=en-US&append_to_response=images&include_image_language=en,null')
        .subscribe(data => {
          this.data = data.items;
          resolve(this.data);
          console.log(data);
      });
    });
  }

  getMoviesPhase3() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/51781?api_key=9e493b8e1d5cda98bb97c77029b786a0&language=en-US&append_to_response=images&include_image_language=en,null')
        .subscribe(data => {
          this.data = data.items;
          resolve(this.data);
          console.log(data);
      });
    });
  }
}
