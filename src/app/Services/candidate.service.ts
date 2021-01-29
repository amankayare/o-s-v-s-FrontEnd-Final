import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidate } from '../Entities/candidate';
import { Election } from '../Entities/election';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

 // election: Election =new Election();
  
  constructor(private http:HttpClient) { }

  
  addCandidate(formData:any,header:any) : Observable<String>{

    return this.http.post<String>("http://localhost:8080/E-Ballot/api/addCandidate",formData, { headers: header });

 }

 getCandidate(id : number):Observable<Candidate>{
   return this.http.get<Candidate>("http://localhost:8080/E-Ballot/api/getCandidate/"+id);
 }


 getAllCandidate():Observable<Array<Candidate>>{
   return this.http.get<Array<Candidate>>("http://localhost:8080/E-Ballot/api/getAllCandidate/");
 }

 removeCandidate(id : number) :Observable<void>{
   return this.http.delete<void>("http://localhost:8080/E-Ballot/api/removeCandidate/"+id);
 }

 modifyCandidate(candidate : Candidate):Observable<String>{
   return this.http.put<String>("http://localhost:8080/E-Ballot/api/modifyCandidate/",candidate);
 }

//  modifyCandidateVoteEarnedCandidate(candidate : Candidate):Observable<String>{
//   return this.http.put<String>("http://localhost:8080/E-Ballot/api/ modifyCandidateVoteEarned/",candidate);
// }
}
