import { Component, OnInit, WritableSignal, signal } from '@angular/core';
import { SideNavComponent } from './ui/side-nav/side-nav.component';
import { HeaderComponent } from './ui/header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-workspace',
  standalone: true,
  imports: [SideNavComponent, HeaderComponent, RouterOutlet],
  templateUrl: './admin-workspace.component.html',
})
export class AdminWorkspaceComponent {
  isSideNavOpen: WritableSignal<boolean> = signal(true);

  toggleSideNav() {
    this.isSideNavOpen.update((isOpen) => !isOpen);
  }
}
