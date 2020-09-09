import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WebServiceService {
  URL="http://localhost:3000/myServices"
  constructor( private _http: HttpClient) {
    
      
    }
    getMyService(){
      return this._http.get(this.URL);
   }
   addNewService(data){
    return this._http.post(this.URL,data)
   }
   deleteMyService(id){
    return this._http.get(`${this.URL}/${id}`)
   }
   getCurrentService(id){
    return this._http.get(`${this.URL}/${id}`)
   }
   updateService(id,data){
    return this._http.put(`${this.URL}/${id}`,data) 
   }
}
