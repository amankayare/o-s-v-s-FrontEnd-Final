import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Candidate } from '../Entities/candidate';
import { Voter } from '../Entities/voter';
import { VoterService } from '../Services/voter.service';

@Component({
  selector: 'app-managevoter',
  templateUrl: './managevoter.component.html',
  styleUrls: ['./managevoter.component.css']
})
export class ManagevoterComponent implements OnInit {

  listOfVoter: Voter[] | undefined;
 
  voterForm!: FormGroup;

  candidate: Candidate = new Candidate();
  
  voter : Voter = new Voter();

  // this.voterForm = this.fb.group({
      
  //   fullName: [''],
  //   email: [''],
  //   adharNo:[''],
  //   password:[''],
  //   employeeId:['']
  // })

    fullName: String | undefined 
    email:String | undefined 
    adharNo:number | undefined
    password:String | undefined
    employeeId:String | undefined
    voterId:number | undefined

    // public voterJson=[
    //   {
    //     fullName:'',
    //     email:'',
    //     adharNo:0,
    //     password:'',
    //     employeeI:'',
    //     voterId:''
    //   }
    // ];

    public listVoter=[] ;
    voterData: Voter | undefined;

  constructor(private router:Router,private http:HttpClient,private voterService:VoterService,private fb:FormBuilder) {


   }


  
  allVoter(){
    this.voterService.getAllVoter().subscribe((res)=>{
      this.listOfVoter=res;
      console.log(res);
      })
  }

  ngOnInit(): void {
    // var angular: any;
    if (!sessionStorage.getItem('username')) {
      this.router.navigate(['/']);
    } 
    this.allVoter();
    // var app=angular.module("myModule",[]).controller("myController",($scope: any) =>{
    //   $scope.listOfVoter=this.listOfVoter;
    // });

  }

  load(){
    this.ngOnInit();
  }

public id : any;
  deleteVoterById(id : any){
     this.id=id;
  }

 async deleteVoter(){
   console.log(" id "+this.id)
      var cheeck= await this.voterService.removeVoter(this.id).toPromise();
      if(cheeck!=null){
        this.load();
        alert("Record deleted")
      }
         
 }


  async updateVoter(id : number){


 this.voter =  await this.voterService.getVoter(id).toPromise();


        this.voterId=this.voter.voterId
        console.log(" voter Id "+this.voter.voterId)
        this.fullName=this.voter.fullName
        this.email=this.voter.email
        this.adharNo=this.voter.adharNo
        this.password=this.voter.password
        this.employeeId=this.voter.employeeId
        
}



  async updateVoterDetails(employeeId : any,fullName : any ,adharNo : any ,email : any,voterId : any){
  console.log(fullName);

 
     this.employeeId=employeeId,
     this.fullName=fullName,
     this.adharNo=adharNo,
     this.email=email
     this.voterId=voterId
 

    var check= await this.voterService.modifyVoter(this.fullName,this.email,this.adharNo,this.employeeId,this.voterId).toPromise();
     if(check!=null){
      this.load();
      alert("Updated record");
     }
        
}


}
