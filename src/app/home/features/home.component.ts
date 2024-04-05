import { Component } from '@angular/core';
import { BrochureHeaderComponent } from '../../shared/ui/header/brochure-header.component';
import { RouterLink } from '@angular/router';
import { BrochureWebsiteHeroImageComponent } from '../../../assets/svg-templates/brochure-website-hero-image.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  imports: [
    BrochureHeaderComponent,
    RouterLink,
    BrochureWebsiteHeroImageComponent,
  ],
})
export class HomeComponent {}
