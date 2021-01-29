import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Organization } from '../Entities/organization';
import { OrganizationService } from '../Services/organization.service';

@Component({
  selector: 'app-candidateorganisation',
  templateUrl: './candidateorganisation.component.html',
  styleUrls: ['./candidateorganisation.component.css']
})
export class CandidateorganisationComponent implements OnInit {
 
  submitted = false;

  public form = this.fb.group({
    cin: ['', [Validators.required,Validators.pattern('^[a-zA-Z0-9 ]{5,20}$')]],
    orgnizationName: ['',Validators.required,[Validators.required,Validators.pattern('^[a-zA-Z ]{5,20}$')]],
    adharNo:[''],
    excelFile:[null]
  })
  
  //form: FormGroup;
  organization: Organization | any;
  constructor(private router: Router, private http: HttpClient, public fb: FormBuilder, private toastr: ToastrService, private organizationService: OrganizationService) {


    // this.form = this.fb.group({
    //   cin: [''],
    //   orgnizationName: [''],
    //   adharNo: [''],
    //   excelFile: [null]
    // })

  }
  vari = false;
  iserror = false;
  errormsg = "";
  ngOnInit(){
  }

  uploadFile(event: any) {

    console.log("upload file form");

    const file =(event.target as HTMLInputElement).files![0];
    let str = event.target.value;
    let namearr = str.split('.');
    let name = namearr[namearr.length - 1];
    if (name != "xlsx") {
      this.vari = true;
      this.errormsg = "File Extensions should be xlsx";
      this.iserror = true;
      return;
  
    }
    this.form.patchValue({
      excelFile: file
    });
    this.form.get("excelFile")?.updateValueAndValidity();
    
  }

  async submitOrganizationDetails() {
    console.log("submit form");
    console.log(this.form.value)
    var formData: any = new FormData();
    formData.append("orgnizationName", this.form.get("orgnizationName")?.value);
    formData.append("cin", this.form.get("cin")?.value);
    formData.append("excelFile", this.form.get("excelFile")?.value);


    let headers = new HttpHeaders();
    headers.append("Accept", "application/json");
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", "my_token");
    headers.append("responseType", "text");

    this.organization = await this.organizationService.addOrganization(formData, { headers: headers }).toPromise();
    console.log("orggg", this.organization);
    if (this.organization.status == "SUCCESS") {
      console.log("msg", this.organization.message);
      this.toastr.success(this.organization.message);
      this.form.reset();

    } else {
      console.log("msg", this.organization.message);
      this.toastr.error(this.organization.message);

    }
  }
}