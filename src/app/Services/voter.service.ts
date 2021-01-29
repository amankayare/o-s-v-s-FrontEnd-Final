import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Voter } from '../Entities/voter';
import { Election } from '../Entities/election';

@Injectable({
  providedIn: 'root'
})
export class VoterService {

  constructor(private http:HttpClient) { 

  }

  //election: Election =new Election();

 // private url="http://localhost:8080/E-Ballot/api/";

  addVoter(voter : Voter) : Observable<any>{

     return this.http.post("http://localhost:8080/E-Ballot/api/addVoter",voter);

  }

  getVoter(id : number):Observable<Voter>{
    return this.http.get<Voter>("http://localhost:8080/E-Ballot/api/getVoter/"+id);
  }


  getAllVoter():Observable<Array<Voter>>{
    return this.http.get<Array<Voter>>("http://localhost:8080/E-Ballot/api/getAllVoter/");
  }

  removeVoter(id : number) :Observable<void>{
    return this.http.delete<void>("http://localhost:8080/E-Ballot/api/removeVoter/"+id);
  }

  modifyVoter(fullName:any,email:any,adharNo:any,employeeId:any,voterId:any){
   // modifyVoter(voter : Voter){
    const body={
    fullName:fullName,
    email:email,
    adharNo:adharNo,
    employeeId:employeeId,
    voterId:voterId
    }

    return this.http.put("http://localhost:8080/E-Ballot/api/modifyVoter",body);
  }

  // goToPoll(electionId:number , voterId :number , decrytFile : File):Observable<String>{
     
  //    return this.http.post<String>("http://localhost:8080/E-Ballot/api/goToPoll",);
  // }

}
