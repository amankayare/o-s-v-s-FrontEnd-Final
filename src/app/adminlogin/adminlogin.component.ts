import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";
import { Login } from '../Entities/login';
import { AdminService } from '../Services/admin.service';
import { Admin } from '../Entities/admin';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})



export class AdminloginComponent implements OnInit {
  container: any;
  username: any;
  form: FormGroup;
  login: Admin | undefined;
  public invalidCredential = false;
  public message: string | undefined;

  constructor(private adminService: AdminService, private mainRouter: Router, private route: ActivatedRoute, private router: Router, private http: HttpClient, public fb: FormBuilder, private toastr: ToastrService) {


    this.form = this.fb.group({

      username: [''],
      password: [''],
    

    })
  }

  ngOnInit(): void {

  }

  toggleForm() {
    this.container = document.querySelector('.container');
    this.container.classList.toggle('active');
  }


  async submitForm() {
    console.log("submit form");
    console.log(this.form.value)
    var formData: any = new FormData();
    formData.append("username", this.form.get("username")?.value);
    formData.append("password", this.form.get("password")?.value);
    console.log("FORM DATA", formData);
    this.username = this.form.get("username")?.value;

    let headers = new HttpHeaders();
    headers.append("Accept", "application/json");
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", "my_token");
    headers.append("responseType", "text");

    this.login = await this.adminService.loginRequest(formData, headers).toPromise();
    console.log(this.login)



    if (this.login.status == "SUCCESS") {
      console.log("successfull login");

      sessionStorage.setItem('adminId', this.login.adminId);
      sessionStorage.setItem('username', this.username);
      console.log("adminId"+this.login.adminId);
      this.router.navigate(['E-Ballot/api/adminDashboard']);


    } else {
      console.log("failed login");
      this.toastr.error(this.login.message);

    }

  }


}