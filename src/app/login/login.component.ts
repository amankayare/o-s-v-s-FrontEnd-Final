import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { Login } from '../Entities/login';
import { LoginService } from '../Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  container: any;
  electionId: String | any;
  form: FormGroup;
  //  login: Promise<Login> | undefined;
  public invalidCredential = false;
  public message: string | undefined;
  login: Login | any;

  constructor(private loginService: LoginService, private mainRouter: Router, private route: ActivatedRoute, private router: Router, private http: HttpClient, public fb: FormBuilder, private toastr: ToastrService) {

    this.electionId = this.route.snapshot.paramMap.get('id');

    this.form = this.fb.group({

      adharNo: [''],
      password: [''],
      electionId: ['']

    })
  }

  ngOnInit(): void {
    console.log(this.electionId);
  }
  toggleForm() {
    this.container = document.querySelector('.container');
    this.container.classList.toggle('active');
  }


  async submitForm() {
    console.log("submit form");
    console.log(this.form.value)
    var formData: any = new FormData();
    formData.append("adharNo", this.form.get("adharNo")?.value);
    formData.append("password", this.form.get("password")?.value);
    formData.append("electionId", this.electionId);
    console.log(this.electionId);
    console.log("FORM DATA", formData);


    let headers = new HttpHeaders();
    headers.append("Accept", "application/json");
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", "my_token");
    headers.append("responseType", "text");


    this.login = await this.loginService.loginRequest(formData, headers).toPromise();
    console.log('msg: ', this.login.message);
    console.log('statsus: ', this.login);

    if (this.login.status === 'SUCCESS') {
      console.log("successfull login");
      // mode:number = res.adharNo;
      //sessionStorage.setItem('adhar',res.adharNo);
      sessionStorage.setItem('electionId', this.electionId);
      sessionStorage.setItem('voterId', this.login.voterId);
      this.router.navigate(['E-Ballot/api/voterdashboard']);


    } else {
      this.toastr.error(this.login.message);

    }

  }


}