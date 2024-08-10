import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {ServicesComponent} from "./pages/services/services.component";
import {FeedbackComponent} from "./pages/feedback/feedback.component";
import {SubscriptionComponent} from "./pages/subscription/subscription.component";
import {ServicedetailsComponent} from "./pages/services/servicedetails/servicedetails.component";
import {FeedbackDetailsComponent} from "./pages/feedback/feedback-details/feedback-details.component";
import {ProfileComponent} from "./pages/profile/profile.component";

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'services', component: ServicesComponent},
  {path:'feedback', component: FeedbackComponent},
  {path:'subscription', component: SubscriptionComponent},
  {path:'services/:id', component: ServicedetailsComponent},
  {path:'feedback/:id', component: FeedbackDetailsComponent},
  {path:'profile', component: ProfileComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
