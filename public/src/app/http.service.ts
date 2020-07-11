import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }


  getAllThings(){
    return this._http.get('/api/things');
  }

  getOneThing(id){
    return this._http.get(`/api/things/${id}`);
  }

  createThing(newThing){
    return this._http.post('/api/things/create', newThing);
  }

  updateThing(updateThing){
    return this._http.put(`/api/things/update/${updateThing._id}`, updateThing);
  }

  destroyThing(id){
    return this._http.delete(`/api/things/destroy/${id}`);
  }

}
