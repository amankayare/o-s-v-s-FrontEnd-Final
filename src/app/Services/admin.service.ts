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

  getAdmin(id : any):Observable<Admin>{
    return this.http.get<Admin>("http://localhost:8080/E-Ballot/api/getAdmin/"+id);
  }


  getAllAdmin():Observable<Array<Admin>>{
    return this.http.get<Array<Admin>>("http://localhost:8080/E-Ballot/api/getAllAdmin/");
  }

  removeAdmin(id : number) :Observable<void>{
    return this.http.delete<void>("http://localhost:8080/E-Ballot/api/removeAdmin/"+id);
  }

  modifyAdmin(username: any,password :any):Observable<any>{
    const id=sessionStorage.getItem('adminId');
    const admin={
      adminId:id,
      username:username,
      password:password
    }
    console.log("servvice username"+username);
    console.log("service password"+password);
    console.log(sessionStorage.getItem('adminId'));
    return this.http.put<any>("http://localhost:8080/E-Ballot/api/modifyAdmin/",admin);
  }
  loginRequest(formData:any,header :any):Observable<Admin>{
    return this.http.post<Admin>("http://localhost:8080/E-Ballot/api/adminLogin/", formData, { headers: header },);
  }

}