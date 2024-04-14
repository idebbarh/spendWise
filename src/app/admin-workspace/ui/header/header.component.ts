import { Component, EventEmitter, Output } from '@angular/core';
import { SWLogoComponent } from '../../../../assets/svg-templates/sw-logo.component';
import { RouterLink } from '@angular/router';
import { IconComponent } from '../../../shared/ui/icon/icon.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SWLogoComponent, RouterLink, IconComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Output() toggleSideNavEvent = new EventEmitter<void>();

  onClick() {
    this.toggleSideNavEvent.emit();
  }
}
