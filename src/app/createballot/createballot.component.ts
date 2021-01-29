import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Candidate } from '../Entities/candidate';
import { Election } from '../Entities/election';
import { CandidateService } from '../Services/candidate.service';
import { ElectionService } from '../Services/election.service';


@Component({
  selector: 'app-createballot',
  templateUrl: './createballot.component.html',
  styleUrls: ['./createballot.component.css'],
  
})
export class CreateballotComponent implements OnInit {
  submitted = false;

  Election: Election =new Election(); ///for binding
  public form = this.fb.group({
    cin: ['', [Validators.required,Validators.pattern('^[a-zA-Z0-9 ]{5,20}$')]],
    electionName: ['',Validators.required,[Validators.required,Validators.pattern('^[a-zA-Z ]{5,20}$')]],
    startdate:[''],
    enddate:[''],
    resultDate:['']
  })
  currentDate: Date| any;
  

  constructor(private electionService:ElectionService,private router:Router, public fb: FormBuilder,private candidateService:CandidateService) { }

  ngOnInit()  {
    this.currentDate=this.formatDate(new Date());
    console.log(this.currentDate)
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

    formatDate(date:any) {
      var d = new Date(date),
          month = '' + (d.getMonth() + 1),
          day = '' + d.getDate(),
          year = d.getFullYear();
  
      if (month.length < 2) month = '0' + month;
      if (day.length < 2) day = '0' + day;
  
      return [year, month, day].join('-');
     }

  
  }
