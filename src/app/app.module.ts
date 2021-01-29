import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';


import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { CreateballotComponent } from './createballot/createballot.component';
import { AddvoterComponent } from './addvoter/addvoter.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ListofvoterComponent } from './listofvoter/listofvoter.component';
import { ListofcandidateComponent } from './listofcandidate/listofcandidate.component';
import { VoterdashboardComponent } from './voterdashboard/voterdashboard.component';
import { ResultComponent } from './result/result.component';
import { VotecandidateComponent } from './votecandidate/votecandidate.component';
import { ViewComponent } from './view/view.component';
import { CandidateorganisationComponent } from './candidateorganisation/candidateorganisation.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ManagevoterComponent } from './managevoter/managevoter.component';
import { ProfileComponent } from './profile/profile.component';
import { AddcandidateComponent } from './addcandidate/addcandidate.component';
import { ManagecandidateComponent } from './managecandidate/managecandidate.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ElectionService } from './Services/election.service';
import { LoginComponent } from './login/login.component';
import { SearchPipe } from './Pipes/search.pipe';

import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ErrorComponent } from './error/error.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ContactComponent } from './contact/contact.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ElectionDetailsComponent } from './election-details/election-details.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    CreateballotComponent,
    ContentComponent,
    AddvoterComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    ListofvoterComponent,
    ListofcandidateComponent,
    VoterdashboardComponent,
    ResultComponent,
    VotecandidateComponent,
    ViewComponent,
    CandidateorganisationComponent,
    AboutusComponent,
    ManagevoterComponent,
    ProfileComponent,
    AddcandidateComponent,
    ManagecandidateComponent,
    LoginComponent,
    SearchPipe,
    AdminloginComponent,
    ErrorComponent,
    ContactComponent,
    ThankyouComponent,
    AdminDashboardComponent,
    ElectionDetailsComponent
  



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2GoogleChartsModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
  
     } )
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
