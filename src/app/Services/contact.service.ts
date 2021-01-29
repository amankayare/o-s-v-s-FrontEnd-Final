import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../Entities/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {


  contact : Contact = new Contact();
  
  constructor(private http:HttpClient) { }

  addContact(formData:any,header:any) : Observable<Contact>{

    return this.http.post<Contact>("http://localhost:8080/E-Ballot/api/addContact",formData, { headers: header });

 }


 getContact(id : number):Observable<Contact>{
   return this.http.get<Contact>("http://localhost:8080/E-Ballot/api/getContact/"+id);
 }


 getAllContact():Observable<Array<Contact>>{
   return this.http.get<Array<Contact>>("http://localhost:8080/E-Ballot/api/getAllContact/");
 }

 removeContact(id : number) :Observable<void>{
   return this.http.delete<void>("http://localhost:8080/E-Ballot/api/removeContact/"+id);
 }
/*
 modifyContact(election : Contact):Observable<Contact>{
   return this.http.put<Contact>("http://localhost:8080/E-Ballot/api/modifyElection/",election);
 }
*/ 

 getAllContactByEmail(email : any):Observable<Array<Contact>>{
  return this.http.get<Array<Contact>>("http://localhost:8080/E-Ballot/api/getAllContactsByEmail/"+email);
}


}
