import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BrochureWebsiteHeroImageComponent } from '../../../../assets/svg-templates/brochure-website-hero-image.component';
import { HeaderComponent } from '../../ui/header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  imports: [HeaderComponent, RouterLink, BrochureWebsiteHeroImageComponent],
})
export class HomeComponent {}
