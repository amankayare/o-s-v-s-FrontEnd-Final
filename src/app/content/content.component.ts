import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { GoogleChartInterface } from 'ng2-google-charts';
import { Election } from '../Entities/election';
import { CandidateElectionEarnedServiceService } from '../Services/candidate-election-earned-service.service';
import { CandidateService } from '../Services/candidate.service';
import { ElectionService } from '../Services/election.service';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  electionList: Election[] | any;

  electionCount: number |  any;
  
  adhar:any;

  public pieChart: GoogleChartInterface | any;

  public ColumnChart: GoogleChartInterface | any;

  public lineChart: GoogleChartInterface | any;
  eName: any;

  isElection : boolean =false;
  election: Election | any;
  candidateName: string | any;
  candidateLenght: number | any;

  constructor(private electionService:ElectionService,private candidateElectionEarnedService:CandidateElectionEarnedServiceService,private router:Router,private http:HttpClient, public fb: FormBuilder) { }


  async recentElection(){


    this.electionList= await this.electionService.getAllElectionByElectionIdInDesc().toPromise();
  
    console.log(this.electionList);

  
    
    let num1:number=0;
    let i!:number;
     let num2:number=0;
    let j!:number;
  

   
  
     let voteEarned : any;
    
      
     var arrayOfArray: any[][] = [];

     
     arrayOfArray[0]=['SecureVote', 'Vote overall percent'];

     this.eName=this.electionList[0].electionName;


    // //  var arr :any;
 
    this.election= await  this.electionService.getElection(this.electionList[0].electionId).toPromise();

    console.log(this.election);

  

    this.candidateLenght=(await this.election).candidateList?.length;

     console.log(this.candidateLenght);

      for(j=num2; j <this.candidateLenght; j++){
           
            
        this.candidateName=this.election.candidateList[j].fullName;
        
        console.log(this.candidateName)

            console.log(this.election.candidateList[j].email)

             var eId=this.election.electionId;
             var cId=this.election.candidateList[j].candidateId;
             console.log("cId"+cId+" "+"eId"+eId);
 
 
             voteEarned = await this.candidateElectionEarnedService.getCandidateVoteEarned(eId,cId).toPromise();

             console.log(this.candidateName+" "+voteEarned);
             console.log(voteEarned);
             var arr: any[] = [];
 
             console.log(j);
             arr[0]=this.candidateName;
             arr[1]=voteEarned;
           
             arrayOfArray[j+1]=arr;
 
         }
 
         console.log(arrayOfArray);
         
        // this.threeDarray[i]=arrayOfArray;

        if(arrayOfArray.length){
          
      

          this.isElection=true;

         this.pieChart={
          chartType: 'ColumnChart',
          dataTable:arrayOfArray,
          //firstRowIsData: true,
          options: {'title': 'SecureVotes'},
        };
  
  
        this.ColumnChart={
            chartType: 'PieChart',
            dataTable:arrayOfArray,
            //firstRowIsData: true,
            options: {'title': 'SecureVotes'},
          };
        
          this.lineChart = {
              chartType: 'LineChart',
              dataTable:arrayOfArray,
              //firstRowIsData: true,
              options: {'title': 'SecureVotes'},
            };
   

        }
  }

  ngOnInit(): void {
    this.recentElection();
   // this.allElection();

    
    if (!sessionStorage.getItem('username')) {
      this.router.navigate(['/']);
    } else {
      this.adhar = sessionStorage.getItem('username');
    }

  }

}
