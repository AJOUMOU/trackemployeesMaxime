import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';

import { RegisterComponent } from './auth/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list'
import { MatCardModule } from '@angular/material/card';
import { NumberSuffixPipe } from './pipe/number-suffix.pipe';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import {
  MatBottomSheet,
  MatBottomSheetModule,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { ViewUserBottomSheetComponent } from './components/view-user-bottom-sheet/view-user-bottom-sheet.component';
import { ViewEmplyeeComponent } from './components/view-emplyee/view-emplyee.component';
import { RequestComponent } from './request/request.component';
import { MissionComponent } from './mission/mission.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ManageEmployeeComponent } from './manage-employee/manage-employee.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SidemenuComponent,
    RegisterComponent,
    NumberSuffixPipe,
    ViewUserBottomSheetComponent,
    ViewEmplyeeComponent,
    RequestComponent,
    MissionComponent,
    ManageUsersComponent,
    ManageEmployeeComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatTableModule,
    MatListModule,
    MatBottomSheetModule,
    MatStepperModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
