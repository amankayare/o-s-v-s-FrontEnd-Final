import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CandidateElectionEarnedService } from '../Entities/candidate-election-earned-service';

@Injectable({
  providedIn: 'root'
})
export class CandidateElectionEarnedServiceService {

  constructor(private http:HttpClient) { }

  getCandidateVoteEarned(eId : number,cId : number) : Observable<any>{
    console.log("in serviev"+eId+" "+cId);
    return this.http.get<any>("http://localhost:8080/E-Ballot/api/getCandidateElectionEarned/"+eId+"/"+cId);

 }

 modifyCandidateVoteEarnedAndVoterVoteStatus(formData:any):Observable<any>{
   return this.http.put<any>("http://localhost:8080/E-Ballot/api/modifyCandidateVoteEarnedAndVoterVoteStatus/",formData);
 }

}