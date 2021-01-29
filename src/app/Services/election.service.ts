import { HttpClient } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import { Observable } from 'rxjs';
import { Election } from '../Entities/election';

@Injectable({
  providedIn: 'root'
})


export class ElectionService {

  election : Election = new Election();
  
  constructor(private http:HttpClient) { }

  addElection(election : Election) : Observable<string>{

    return this.http.post<string>("http://localhost:8080/E-Ballot/api/addElection",election);

 }

 getElection(id : number):Observable<Election>{
   return this.http.get<Election>("http://localhost:8080/E-Ballot/api/getElection/"+id);
 }


 getAllElection():Observable<Array<Election>>{
   return this.http.get<Array<Election>>("http://localhost:8080/E-Ballot/api/getAllElection/");
 }

 removeAdmin(id : number) :Observable<void>{
   return this.http.delete<void>("http://localhost:8080/E-Ballot/api/removeElection/"+id);
 }

 modifyElection(election : Election):Observable<String>{
   return this.http.put<String>("http://localhost:8080/E-Ballot/api/modifyElection/",election);
 }


 getAllElectionByCin(cin : any):Observable<Array<Election>>{
  return this.http.get<Array<Election>>("http://localhost:8080/E-Ballot/api/getElectionByCin/"+cin);
}

getAllElectionByElectionIdInDesc():Observable<Array<Election>>{
  return this.http.get<Array<Election>>("http://localhost:8080/E-Ballot/api/getElectionByEidInDesc/");
}

}
