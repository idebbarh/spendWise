import {
  Component,
  OnDestroy,
  OnInit,
  WritableSignal,
  inject,
  signal,
} from '@angular/core';
import { SideNavComponent } from './ui/side-nav/side-nav.component';
import { HeaderComponent } from './ui/header/header.component';
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { Subscription, filter, tap } from 'rxjs';

@Component({
  selector: 'app-workspace',
  standalone: true,
  imports: [
    SideNavComponent,
    HeaderComponent,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './admin-workspace.component.html',
})
export class AdminWorkspaceComponent implements OnInit, OnDestroy {
  isSideNavOpen: WritableSignal<boolean> = signal(true);
  pageTitle!: WritableSignal<string[]>;

  router = inject(Router);

  sub!: Subscription;

  //actions
  toggleSideNav(): void {
    this.isSideNavOpen.update((isOpen) => !isOpen);
  }

  private updatePageTitle(url: string) {
    const pageTitle = this.getPageTitle(url);

    if (this.pageTitle) {
      this.pageTitle.set(pageTitle);
    } else {
      this.pageTitle = signal(pageTitle);
    }
  }

  //utils
  private getPageTitle(url: string): string[] {
    const pageTitle = url.split('/').slice(1);

    return pageTitle;
  }

  getPathFromIndex(index: number): string {
    const path = `/${this.pageTitle()
      .slice(0, index + 1)
      .join('/')}`;
    return path;
  }

  //hooks
  ngOnInit(): void {
    this.updatePageTitle(this.router.url);

    this.sub = this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd,
        ),
        tap((event) => {
          this.updatePageTitle(event.url);
        }),
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
