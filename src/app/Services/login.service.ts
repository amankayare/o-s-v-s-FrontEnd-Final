import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../Entities/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  login : Login = new Login();

  constructor(private http:HttpClient) { }



  loginRequest(formData:any,header:any):Observable<Login>{

    return this.http.post<Login>('http://localhost:8080/E-Ballot/api/voterLogin', formData, { headers: header });

  }
}
