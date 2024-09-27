import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { GuidesComponent } from './guides/guides.component';
import { RatingsComponent } from './ratings/ratings.component';
import { BookingComponent } from './booking/booking.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BlogsComponent } from './blogs/blogs.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { ServicesComponent } from './services/services.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'guides', component: GuidesComponent },
  { path: 'ratings', component: RatingsComponent },
  { path: 'booking', component: BookingComponent },
  { path: '', component: HomeComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'destinations', component: DestinationsComponent },
  { path: 'services', component: ServicesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
