import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { GuidesComponent } from './guides/guides.component';
import { RatingsComponent } from './ratings/ratings.component';
import { BookingComponent } from './booking/booking.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'guides', component: GuidesComponent },
  { path: 'ratings', component: RatingsComponent },
  { path: 'booking', component: BookingComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
