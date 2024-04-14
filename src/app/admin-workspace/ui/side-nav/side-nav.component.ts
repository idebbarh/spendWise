import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  IconComponent,
  TIconName,
} from '../../../shared/ui/icon/icon.component';

type TEntries = ['path', string] | ['title', string] | ['icon', TIconName];

type TNavLink = {
  [Key in TEntries as Key extends [infer K, any] ? K : never]: Key extends [
    any,
    infer T,
  ]
    ? T
    : never;
};

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, IconComponent],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss',
})
export class SideNavComponent {
  @Input() isSideNavOpen: boolean = true;

  navLinks: TNavLink[] = [
    { path: '/workspace/dashboard', title: 'dashboard', icon: 'dashboard' },
    { path: '/workspace/statistics', title: 'statistics', icon: 'statistics' },
    { path: '/workspace/accounts', title: 'accounts', icon: 'accounts' },
    { path: '/workspace/categories', title: 'categories', icon: 'categories' },
    {
      path: '/workspace/transactions',
      title: 'transactions',
      icon: 'transactions',
    },
    { path: '/workspace/settings', title: 'settings', icon: 'settings' },
  ];
}
