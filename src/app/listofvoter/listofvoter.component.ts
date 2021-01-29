import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Election } from '../Entities/election';
import { Voter } from '../Entities/voter';
import { ElectionService } from '../Services/election.service';
import { VoterService } from '../Services/voter.service';

@Component({
  selector: 'app-listofvoter',
  templateUrl: './listofvoter.component.html',
  styleUrls: ['./listofvoter.component.css']
})
export class ListofvoterComponent implements OnInit {

  listOfVoter: Voter[] | undefined;

  voterForm!: FormGroup;
  voterObj: Voter =new Voter();
  allElection: string | undefined;
  adharNo="";

  constructor(private SpinnerService: NgxSpinnerService,private router:Router,private http:HttpClient,private voterService:VoterService,private fb:FormBuilder,private electionService:ElectionService) {

    this.voterForm = this.fb.group({
      fullName: [''],
      email: [''],
      adharNo:[''],
      password:[''],
      employeeId:['']

    })

   }

 
  allVoter(){
    this.voterService.getAllVoter().subscribe((res)=>{
      this.listOfVoter=res;
      console.log("all voter");
    })
  }
  ngOnInit(): void {
    if (!sessionStorage.getItem('username')) {
      this.router.navigate(['/']);
    } 
    this.allVoter();
  }
   
 
  
  async getVoter(id: number){
     this.voterObj=await this.voterService.getVoter(id).toPromise();
     console.log(this.voterObj);
     console.log(this.electionService.election);
     this.electionService.election.voterList?.push(this.voterObj);
 }

addAllElectionDetails(){
   console.log(this.electionService.election);

   this.SpinnerService.show();
   console.log("Above");

  this.http.post("http://localhost:8080/E-Ballot/api/addElection",this.electionService.election,{ responseType: 'text' as 'json' }).subscribe((data:any)=>{
    this.allElection = data;
     console.log(this.allElection);
     console.log("inside");
     this.SpinnerService.hide();
     console.log(this.allElection);
     this.router.navigate(['E-Ballot/api/adminDashboard/createballot']);
  })
     
 }





}
