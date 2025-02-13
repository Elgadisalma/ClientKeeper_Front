import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from '../../components/guests/landing-page/landing-page.component';
import { AboutUsPageComponent } from '../../components/guests/about-us-page/about-us-page.component';

@NgModule({
  declarations: [LandingPageComponent, AboutUsPageComponent],
  imports: [CommonModule],
})
export class GuestModule {}
