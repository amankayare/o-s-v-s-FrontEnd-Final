import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { CreateballotComponent } from './createballot/createballot.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AddvoterComponent } from './addvoter/addvoter.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ListofvoterComponent } from './listofvoter/listofvoter.component';
import { ListofcandidateComponent } from './listofcandidate/listofcandidate.component';
import { VoterdashboardComponent } from './voterdashboard/voterdashboard.component';
import { ResultComponent } from './result/result.component';
import { VotecandidateComponent } from './votecandidate/votecandidate.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ManagevoterComponent } from './managevoter/managevoter.component';
import { ProfileComponent } from './profile/profile.component';
import { AddcandidateComponent } from './addcandidate/addcandidate.component';
import { ManagecandidateComponent } from './managecandidate/managecandidate.component';
import { CandidateorganisationComponent } from './candidateorganisation/candidateorganisation.component';
import { LoginComponent } from './login/login.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ErrorComponent } from './error/error.component';
import { ContactComponent } from './contact/contact.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';


/*
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'E-Ballot/api/admin', component: ContentComponent },
  { path: 'E-Ballot/api/navbar', component: NavbarComponent },
  { path: 'E-Ballot/api/sidebar', component: SidebarComponent },
  { path: 'E-Ballot/api/createballot', component: CreateballotComponent },
  { path: 'E-Ballot/api/addvoter', component: AddvoterComponent },
  { path: 'E-Ballot/api/footer', component: FooterComponent },
  { path: 'E-Ballot/api/header', component: HeaderComponent },
  { path: 'E-Ballot/api/login/:id', component: LoginComponent },
  { path: 'E-Ballot/api/candidatelist', component: ListofcandidateComponent },
  { path: 'E-Ballot/api/voterlist', component: ListofvoterComponent },
  { path: 'E-Ballot/api/voterdashboard', component: VoterdashboardComponent },
  { path: 'E-Ballot/api/result', component: ResultComponent },
  { path: 'E-Ballot/api/votecandidate', component: VotecandidateComponent },
  { path: 'E-Ballot/api/aboutus', component: AboutusComponent },
  { path: 'E-Ballot/api/managevoter', component: ManagevoterComponent },
  { path: 'E-Ballot/api/profile', component: ProfileComponent },
  { path: 'E-Ballot/api/addcandidates', component: AddcandidateComponent },
  { path: 'E-Ballot/api/managecandidates', component: ManagecandidateComponent },
  { path: 'E-Ballot/api/candidateorganisation', component: CandidateorganisationComponent },
  { path: 'E-Ballot/api/8888', component: AdminloginComponent },
  { path: 'E-Ballot/api/contact', component: ContactComponent },
  { path: 'E-Ballot/api/thankyou', component: ThankyouComponent },
  { path: '**', component: ErrorComponent },


];*/



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'E-Ballot/api/adminDashboard', component: AdminDashboardComponent ,
  children: [
    { path: '', component: ResultComponent },
    { path: 'createballot', component: CreateballotComponent,children: []},
    {path: 'listofcandidate', component: ListofcandidateComponent},
    { path: 'voterlist', component: ListofvoterComponent },
    { path: 'managecandidates', component: ManagecandidateComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'result', component: ResultComponent },
    { path: 'managevoter', component: ManagevoterComponent },
    { path: 'contact', component: ContactComponent },

  
  ],},
  { path: 'E-Ballot/api/addvoter', component: AddvoterComponent },
  { path: 'E-Ballot/api/login/:id', component: LoginComponent },
  { path: 'E-Ballot/api/voterdashboard', component: VoterdashboardComponent },
  { path: 'E-Ballot/api/votecandidate', component: VotecandidateComponent },
  { path: 'E-Ballot/api/aboutus', component: AboutusComponent },
  { path: 'E-Ballot/api/addcandidates', component: AddcandidateComponent },
  { path: 'E-Ballot/api/organisation', component: CandidateorganisationComponent },
  { path: 'E-Ballot/api/8888', component: AdminloginComponent },
  { path: 'E-Ballot/api/thankyou', component: ThankyouComponent },
  { path: '**', component: ErrorComponent },


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
