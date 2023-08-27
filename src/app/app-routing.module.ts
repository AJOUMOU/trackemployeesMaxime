import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { HomeComponent } from './home/home.component';
import { RequestComponent } from './request/request.component';
import { MissionComponent } from './mission/mission.component';
import { ManageEmployeeComponent } from './manage-employee/manage-employee.component';

const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'register',component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'sidemenu', component:SidemenuComponent},
  {path:'home', component:HomeComponent},
  {path:'request',component:RequestComponent},
  {path:'mission',component:MissionComponent},
  {path:'manage/employee',component:ManageEmployeeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
