import { Component } from '@angular/core';
import { BrochureHeaderComponent } from '../../shared/ui/header/brochure-header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  imports: [BrochureHeaderComponent],
})
export class HomeComponent {}
