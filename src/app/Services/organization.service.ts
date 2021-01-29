import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Organization } from '../Entities/organization';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  constructor(private http:HttpClient) { }

  addOrganization(formData:any, headers :any) : Observable<String>{

    return this.http.post<String>("http://localhost:8080/E-Ballot/api/addOrganization",formData,{ headers: headers});

 }

 getOrganization(id : number):Observable<Organization>{
   return this.http.get<Organization>("http://localhost:8080/E-Ballot/api/getOrganization/"+id);
 }


 getAllOrganization():Observable<Array<Organization>>{
   return this.http.get<Array<Organization>>("http://localhost:8080/E-Ballot/api/getAllOrganization/");
 }

 removeOrganization(id : number) :Observable<void>{
   return this.http.delete<void>("http://localhost:8080/E-Ballot/api/removeOrganization/"+id);
 }

 modifyOrganization(organization : Organization):Observable<String>{
   return this.http.put<String>("http://localhost:8080/E-Ballot/api/modifyOrganization/",organization);
 }


 getOrganizationByCinNo(cinNo : number):Observable<Organization>{
  return this.http.get<Organization>("http://localhost:8080/E-Ballot/api/getOrganizationByCinNon/"+cinNo);
}

}
