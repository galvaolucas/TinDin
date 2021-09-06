import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  constructor(private htpp: HttpClient) {}
  login(data: any): Observable<any>{
    console.log("I am server");
    return this.htpp.post(`${baseUrl}users/login`,data)
  } 
}
