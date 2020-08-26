import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import  'rxjs/Rx';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private username:string;
  private clientid ='26daead3a990db906a05';
  private clientsecret='89bb2323352ed0be5f4e68269dc8e5b74c12b110';

  constructor(private http:HttpClient) {
    console.log("its okay");
    this.username='Langat05';
   }

   getdata(){
     return this.http.get("https://github.com/users/" + this.username +"?client_id" + this.clientid
     + "&client_secret=" + this.clientsecret)
     
   }
}
