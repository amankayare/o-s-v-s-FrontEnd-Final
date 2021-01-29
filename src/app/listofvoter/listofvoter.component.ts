import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
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
  allElection: Promise<String> | undefined;
  adharNo="";

  constructor(private router:Router,private http:HttpClient,private voterService:VoterService,private fb:FormBuilder,private electionService:ElectionService) {

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
   this.allElection =  this.electionService.addElection(this.electionService.election).toPromise();
   console.log(this.allElection);    
   this.router.navigate(['E-Ballot/api/adminDashboard/createballot']); 
 }





}
