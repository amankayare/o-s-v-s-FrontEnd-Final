import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Candidate } from '../Entities/candidate';
import { Election } from '../Entities/election';
import { CandidateService } from '../Services/candidate.service';
import { ElectionService } from '../Services/election.service';


@Component({
  selector: 'app-listofcandidate',
  templateUrl: './listofcandidate.component.html',
  styleUrls: ['./listofcandidate.component.css']
})
export class ListofcandidateComponent implements OnInit {

  form: FormGroup;
  adharNo = "";
  
  listOfCandidate : Candidate[] | undefined;

  election: Election =new Election();
  candidateObj: Candidate = new Candidate();
  
  constructor(private router:Router,private http:HttpClient,private candidateService:CandidateService,private fb:FormBuilder,private electionService:ElectionService) { 


    this.form = this.fb.group({
      fullName: [''],
      email: [''],
      adharNo:[''],
      symbol:[null],
      employeeId:['']

    })

  }


 
  allCandidate(){
    console.log(this.electionService.election);
    this.candidateService.getAllCandidate().subscribe((res)=>{
      this.listOfCandidate=res;
    })
  }

  async getCandidate(id: number){
     console.log(this.electionService.election);
     this.candidateObj= await this.candidateService.getCandidate(id).toPromise();
     console.log(this.candidateObj);
     console.log(this.electionService.election);
     this.electionService.election.candidateList?.push(this.candidateObj);
     console.log(this.electionService.election.candidateList);
  }

  navigateToVoterList(){
    this.router.navigate(['E-Ballot/api/adminDashboard/voterlist']);
  }

  ngOnInit(): void {
    if (!sessionStorage.getItem('username')) {
      this.router.navigate(['/']);
    } 
    this.allCandidate();
  }
  myFunction() {
   
  }
}
