import { Component, OnInit } from '@angular/core';
import { Admin } from '../Entities/admin';
import { AdminService } from '../Services/admin.service';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faEyeSlash } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

admin: Admin =new Admin();

  public faEye = faEye;
  public faEyeSlash = faEyeSlash;
  public type: string = "password";
  public hideBtn: boolean = false;
  public showBtn: boolean = true;


username : any;
password: any;
  id: string | null | undefined;
  adminDetails: Promise<Admin> | any;

  constructor(private adminService:AdminService) { }

  async ngOnInit(): Promise<void> {
    this.id=sessionStorage.getItem('adminId');
    this.adminDetails= await this.adminService.getAdmin(this.id).toPromise();
    this.username=this.adminDetails.username;
    this.password=this.adminDetails.password;
  }

  load(){
    this.ngOnInit();
  }

  async updateAdminDetails(username : any,password : any){
        this.id=sessionStorage.getItem('adminId');
        console.log(this.id);
        this.username=username;
        this.password=password;
       console.log("username"+username);
       console.log("password"+password);
     var check=await this.adminService.modifyAdmin(this.username,this.password).toPromise();
     
     if(check!=null){
       this.load();
       alert("your profile is updated !! ")
     }

  }
show() {

    this.hideBtn = true;
    this.showBtn = false;
    this.type = "text"

  }
  hide() {


    this.showBtn = true;
    this.hideBtn = false;
    this.type = "password";

  }

}
