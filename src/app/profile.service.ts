import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import  'rxjs/Rx';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private username:string;
  private clientid ='';
  private clientsecret='';

  constructor(private http:HttpClient) { }
}
