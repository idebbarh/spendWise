import { Component } from '@angular/core';
import { SWLogoComponent } from '../../../../assets/svg-templates/sw-logo.component';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'sw-brochure-header',
  templateUrl: './brochure-header.component.html',
  imports: [SWLogoComponent, RouterLink],
})
export class BrochureHeaderComponent {}
