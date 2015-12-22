import {
  Component,
  View
} from 'angular2/core';
import {
  ROUTER_DIRECTIVES,
  RouteConfig,
  RouterLink,
  RouterOutlet
} from 'angular2/router';

import {Start} from './start';
import {About} from './about';
import {Contact} from './contact';

@RouteConfig([
  { path: '/', redirectTo: ['About']},
  { path: '/start/...', component: Start, as: 'Start'},
  { path: '/about', component: About, as: 'About'},
  { path: '/contact', component: Contact, as: 'Contact'}
])
@Component({
  selector: 'router-app'
})
@View({
  directives: [RouterLink, ROUTER_DIRECTIVES],
  template: `
  <div>
    <nav>
      <ul>
        <li><a [routerLink]="['/Start/StartMain']" class="link">Start</a></li>
        <li><a [routerLink]="['/About']">About</a></li>
        <li><a [routerLink]="['/Contact']">Contact</a></li>
      </ul>
    </nav>
    <main>
      <router-outlet></router-outlet>
    </main>
  </div>
  `
})
export class RouterApp {
}
