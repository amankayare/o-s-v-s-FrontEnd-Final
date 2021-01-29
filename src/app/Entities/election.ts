import { Candidate } from "./candidate";
import { Voter } from "./voter";

export class Election {
    public cin : String | undefined;
    public  electionId : number | undefined; 
    public  electionName : string | undefined; 
    public  startDate : string | undefined; 
    public  endDate : string | undefined; 
    public  resultDate : string | undefined; 
    public voterList : Voter[] |undefined ;
    public candidateList : Candidate[] |undefined ;
}
