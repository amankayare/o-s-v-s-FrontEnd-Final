import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Contact } from '../Entities/contact';
import { ContactService } from '../Services/contact.service';
import { ToastrService } from 'ngx-toastr';

declare var $: any;
declare var jQuery: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  form: FormGroup;
  contactList: Contact[] | any;
  contact: Contact | any;


  constructor(private router: Router, private http: HttpClient, public fb: FormBuilder, public contactService: ContactService, private toastr: ToastrService) {

    // this.employeeId = 10;
    this.form = this.fb.group({
      fullName: [''],
      email: [''],
      query: [''],
    })

  }
  ngOnInit(): void {

  }


  async submitForm() {
    console.log("submit form");
    console.log(this.form.value)
    var formData: any = new FormData();
    formData.append("fullName", this.form.get("fullName")?.value);
    formData.append("email", this.form.get("email")?.value);
    formData.append("query", this.form.get("query")?.value);


    let headers = new HttpHeaders();
    headers.append("Accept", "application/json");
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", "my_token");
    headers.append("responseType", "text");

    console.log(formData)

    this.contact = await this.contactService.addContact(formData, { headers: headers }).toPromise();

    console.log(this.contact);
    if (this.contact.status == "SUCCESS") {
      this.toastr.success(this.contact.message);
      this.form.reset();
    } else {
      this.toastr.error(this.contact.message);

    }
  }

}
