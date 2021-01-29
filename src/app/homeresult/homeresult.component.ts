
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GoogleChartInterface } from 'ng2-google-charts';
import { CandidateElectionEarnedService } from '../Entities/candidate-election-earned-service';
import { Election } from '../Entities/election';
import { Voter } from '../Entities/voter';
import { CandidateElectionEarnedServiceService } from '../Services/candidate-election-earned-service.service';
import { ElectionService } from '../Services/election.service';

@Component({
  selector: 'app-homeresult',
  templateUrl: './homeresult.component.html',
  styleUrls: ['./homeresult.component.css']
})

export class HomeresultComponent implements OnInit {

  
  electionList: Election[] | any;

  electionCount: number |  any;

  threeDarray: any[][][] =[];

  getElectionByCin: Election[] | any;

  candidateLenght: number | any;

   candidateName : String | any;

   isElection : false | any ;
   
    election : Election | any;

  public pieChart: GoogleChartInterface | any;


  public ColumnChart: GoogleChartInterface | any;

 public lineChart: GoogleChartInterface | any;
  electionName: any;
  eName: any;

public filterList : any = new  Array();

  constructor(private electionService:ElectionService,private candidateElectionEarnedService:CandidateElectionEarnedServiceService,
    private fb:FormBuilder) {
      
     }

     voter :Voter =new Voter();

     formatDate(date:any) {
      var d = new Date(date),
          month = '' + (d.getMonth() + 1),
          day = '' + d.getDate(),
          year = d.getFullYear();
  
      if (month.length < 2) month = '0' + month;
      if (day.length < 2) day = '0' + day;
  
      return [year, month, day].join('-');
     }

  async allElection(){
    this.electionList= await this.electionService.getAllElection().toPromise();


    var num:number=0;
    var i:number;
    var j:number=0;
    for(i=num;i<this.electionList.length;i++){
       console.log(this.electionList[i].resultDate);
      let resultDate=Date.parse(this.electionList[i].resultDate);
      let currentDate=Date.parse(this.formatDate(new Date()));
       console.log(currentDate>=resultDate);

       //let filterList : Election[] | any;

       if(currentDate>=resultDate){
         console.log(this.electionList[i]);
         // this.filterList.splice(this.electionList.length,0,this.electionList[i]);
         console.log(j);
         this.filterList.push(this.electionList[i]);
         j++;
       }
      
       console.log(resultDate);
       console.log(currentDate);
       console.log("date");
    }

    console.log(this.electionList);
    console.log(this.filterList);
  
}



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

   this.electionName=this.electionList[0].electionName;


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
  
    this.allElection();

    this.recentElection();
  }


private textInput: HTMLInputElement | any;

fullName: string = "home"; 


  async myFunction(){
   console.log("election result");

   this.isElection=false;

   console.log(this.voter.fullName);
 
  //  let greeter:HTMLHeadingElement = document.getElementById("greeter") as HTMLHeadingElement;

  //   console.log(greeter.innerText);

  // greeter.innerHTML;

 

      var n:number=0;
      var i:number;
    console.log("115");
      for(i=n;i<this.electionList.length;i++){
       console.log("117");
       console.log(" from html "+this.voter.fullName);
       console.log(" from ts "+this.electionList[i].cin);

        if(this.voter.fullName==this.electionList[i].cin){
          console.log("119");
          let len=this.electionCount;
          let num1:number=0;
          let i!:number;
           let num2:number=0;
          let j!:number;
          console.log(len);
      
          let name=this.voter.fullName;
    
        this.getElectionByCin= await this.electionService.getAllElectionByCin(this.voter.fullName).toPromise();
    
        console.log(this.getElectionByCin[0]);
           
       // for(i=num1 ; i< this.getElectionByCin[0].length ; i++){
       
      
          let voteEarned : any;
          
     
          var person: any[] = [];
      
         var arrayOfArray: any[][] = [];
     
         arrayOfArray[0]=['SecureVote', 'Vote overall percent'];
    
        console.log(this.getElectionByCin[0].electionId);
    
        this.election = await this.electionService.getElection(this.getElectionByCin[0].electionId).toPromise();
    
        console.log(this.election);
    
        console.log(this.election.candidateList?.length)
    
        this.candidateLenght=this.election.candidateList?.length ;
    
          for(j=num2; j <this.candidateLenght; j++){
               
                
            this.candidateName=this.election.candidateList[j].fullName;
                
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
              
              this.electionName=this.election.electionName;
    
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
        }
  
    }
  }



 