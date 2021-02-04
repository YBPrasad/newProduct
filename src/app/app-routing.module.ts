import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { RegisterNewComponent } from './admin/register-new/register-new.component';
import { ConsultantFormComponent } from './consultant/consultant-form/consultant-form.component';
import { LoginComponent } from './consultant/login/login.component';
import { AllrecordsComponent } from './dashboard/allrecords/allrecords.component';
import { ClientComponent } from './dashboard/client/client.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DefaultComponent } from './dashboard/default/default.component';


const routes: Routes = [
  {path:'',component:AdminLoginComponent},
  {path:'register',component:LoginComponent},
  {path:'conform',component:ConsultantFormComponent},
  {path:'dashboard',component:DashboardComponent,
  children:[
    {path:'',component:DefaultComponent},
    {path:'all',component:AllrecordsComponent},
    {path:'clients',component:ClientComponent},
    
    
  ]
},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
