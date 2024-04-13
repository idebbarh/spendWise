import { AsyncPipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterOutlet,
} from '@angular/router';
import { Observable, filter, map, startWith } from 'rxjs';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [RouterLink, RouterOutlet, AsyncPipe],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent implements OnInit {
  pageImage$!: Observable<string>;
  private router = inject(Router);

  ngOnInit(): void {
    this.pageImage$ = this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      startWith(this.router.url),
      map((value: NavigationEnd | string) => {
        const url = value instanceof NavigationEnd ? value.url : value;

        switch (url) {
          case '/login':
            return 'login-image.jpg';
          case '/register':
            return 'register-page.jpg';
          default:
            return 'default-auth-page.jpg';
        }
      }),
    );
  }
}
