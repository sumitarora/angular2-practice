import {Component, View} from 'angular2/core';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig, Location, RouterLink,
RouterOutlet}
from 'angular2/router';


import {Start} from './start';
import {About} from './about';
import {Contact} from './contact';

@RouteConfig([
  { path: '/', component: Start, as: 'Start'},
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
        <li><a router-link="start">Start</a></li>
        <li><a router-link="about">About</a></li>
        <li><a router-link="contact">Contact</a></li>
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
