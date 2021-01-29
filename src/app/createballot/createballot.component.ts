import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Candidate } from '../Entities/candidate';
import { Election } from '../Entities/election';
import { CandidateService } from '../Services/candidate.service';
import { ElectionService } from '../Services/election.service';

declare var $: any;
declare var jQuery: any;
@Component({
  selector: 'app-createballot',
  templateUrl: './createballot.component.html',
  styleUrls: ['./createballot.component.css'],
  
})
export class CreateballotComponent implements OnInit {

  Election: Election =new Election(); ///for binding

  

  constructor(private electionService:ElectionService,private router:Router,private candidateService:CandidateService) { }

  ngOnInit()  {
   
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
      this.router.navigate(['E-Ballot/api/adminDashboard/listofcandidate']);
    }

  }
