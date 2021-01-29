import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Election } from '../Entities/election';
import { CandidateService } from '../Services/candidate.service';
import { ElectionService } from '../Services/election.service';

@Component({
  selector: 'app-election-details',
  templateUrl: './election-details.component.html',
  styleUrls: ['./election-details.component.css']
})
export class ElectionDetailsComponent implements OnInit {
  Election: Election =new Election(); ///for binding

  constructor(private electionService:ElectionService,private router:Router,private candidateService:CandidateService) { }

  ngOnInit(): void {
    if (!sessionStorage.getItem('username')) {
      this.router.navigate(['/']);
    } 
  }
  addElection(){
    // this.router.navigate(['/reserve',JSON.stringify(this.Election)]‌​);
     this.electionService.election.cin=this.Election.cin;
     this.electionService.election.startDate=this.Election.startDate;
     this.electionService.election.endDate=this.Election.endDate;
     this.electionService.election.resultDate=this.Election.resultDate;
     this.electionService.election.electionName=this.Election.electionName;
     this.electionService.election.voterList=[];
     this.electionService.election.candidateList=[];
     console.log(this.Election);
     console.log(this.electionService.election);
     this.router.navigate(['E-Ballot/api/adminDashboard/createBallot/listofcandidate']);
   }
}
