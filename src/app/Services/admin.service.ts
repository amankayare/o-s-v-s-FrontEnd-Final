import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../Entities/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  addAdmin(admin : Admin) : Observable<String>{

     return this.http.post<String>("http://localhost:8080/E-Ballot/api/addAdmin",admin);

  }

  getAdmin(id : number):Observable<Admin>{
    return this.http.get<Admin>("http://localhost:8080/E-Ballot/api/getAdmin/"+id);
  }


  getAllAdmin():Observable<Array<Admin>>{
    return this.http.get<Array<Admin>>("http://localhost:8080/E-Ballot/api/getAllAdmin/");
  }

  removeAdmin(id : number) :Observable<void>{
    return this.http.delete<void>("http://localhost:8080/E-Ballot/api/removeAdmin/"+id);
  }

  modifyAdmin(admin : Admin):Observable<String>{
    return this.http.put<String>("http://localhost:8080/E-Ballot/api/modifyAdmin/",admin);
  }
  loginRequest(formData:any,header :any):Observable<Admin>{
    return this.http.post<Admin>("http://localhost:8080/E-Ballot/api/adminLogin/", formData, { headers: header },);
  }

}