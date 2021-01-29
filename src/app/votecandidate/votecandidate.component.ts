import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-votecandidate',
  templateUrl: './votecandidate.component.html',
  styleUrls: ['./votecandidate.component.css']
})
export class VotecandidateComponent implements OnInit {
  showSpinner = true;
  data: any;
  constructor(private spinner: NgxSpinnerService) {}

  ngOnInit() {
    
   
}
}