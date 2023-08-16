import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface credentials{
  jituEmail:string 
  password:string 
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
LoginService(details:credentials){
    return this.http.post('http://localhost:4500/user/login', details)
  }
}
