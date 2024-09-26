import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AppComponent } from './appComponent';
import { RegisterComponent } from './register/register.component';

 
const routes: Routes = [
  { path: '/login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
  
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes),  AppComponent],
  exports: [RouterModule],
})
export class AppRoutingModule { }
 