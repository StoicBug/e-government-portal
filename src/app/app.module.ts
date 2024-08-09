import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './pages/home/hero/hero.component';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { SubscriptionComponent } from './pages/subscription/subscription.component';
import { ServicedetailsComponent } from './pages/services/servicedetails/servicedetails.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    HomeComponent,
    ServicesComponent,
    FeedbackComponent,
    SubscriptionComponent,
    ServicedetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
