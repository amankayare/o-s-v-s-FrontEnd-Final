
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Candidate } from '../Entities/candidate';
import { CandidateService } from '../Services/candidate.service';


@Component({
  selector: 'app-addcandidate',
  templateUrl: './addcandidate.component.html',
  styleUrls: ['./addcandidate.component.css']
})
export class AddcandidateComponent implements OnInit {

  //  form: FormGroup;


  candidate: Candidate = new Candidate()
  submitted = false;
  public form = this.fb.group({
    fullName: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]{5,20}$')]],
    email: ['', [Validators.required, Validators.pattern('^[A-Za-z0-9_.]{4,20}@[A-Za-z]{3,8}\.[A-Za-z]{2,10}$'),],],
    adharNo: ['', [Validators.required, Validators.pattern('^[0-9]{12}$')]],
    symbol: [null],
    employeeId: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9 ]{5,20}$')]]

  })

  candiadate: Candidate | any;
  constructor(private router: Router, private http: HttpClient, public fb: FormBuilder, private toastr: ToastrService, private candidateService: CandidateService) {

    // this.employeeId = 10;

    // public fbFormGroup = this.fb.group({
    //   username: ['', [Validators.required,Validators.pattern('^[a-zA-Z ]{5,20}$')]],
    //   email: ['', [Validators.required,Validators.pattern('^[A-Za-z0-9_.]{4,20}@[A-Za-z]{3,8}\.[A-Za-z]{2,10}$'),],],
    //   pwd: ['', [Validators.required,Validators.pattern('^[a-zA-Z ]{5,20}$')]],

    // });


  }
  vari = false;
  iserror = false;
  errormsg = "";

  ngOnInit() {
    //  this.form.controls['email'].disable();

  }

  uploadFile(event: any) {
    const file = (event.target as HTMLInputElement).files![0];
    let str = event.target.value;
    let namearr = str.split('.');
    let name = namearr[namearr.length - 1];
    if (name != "png") {
      this.vari = true;
      this.errormsg = "File Extensions should be png";
      this.iserror = true;
      return;
    }

    this.form.patchValue({
      symbol: file
    });
    this.form.get("symbol")?.updateValueAndValidity();
  }

  async submitForm() {
    console.log("submit form");
    console.log(this.form.value)
    var formData: any = new FormData();
    formData.append("fullName", this.form.get("fullName")?.value);
    formData.append("email", this.form.get("email")?.value);
    formData.append("adharNo", this.form.get("adharNo")?.value);
    formData.append("employeeId", this.form.get("employeeId")?.value);
    formData.append("symbol", this.form.get("symbol")?.value);


    let headers = new HttpHeaders();
    headers.append("Accept", "application/json");
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", "my_token");
    headers.append("responseType", "text");

    this.candiadate = await this.candidateService.addCandidate(formData, { headers: headers }).toPromise();

    if (this.candiadate.status == "SUCCESS") {
      this.toastr.success(this.candiadate.message);
      this.form.reset();
    } else {
      this.toastr.error(this.candiadate.message);

    }
  }
}
