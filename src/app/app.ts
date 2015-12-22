import {Component} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {Http} from 'angular2/http';
import {FORM_PROVIDERS} from 'angular2/common';

import {Title} from './providers/title';
import {XLarge} from './directives/x-large';
import {Home} from './home/home';

@Component({
  selector: 'app', // <app></app>
  providers: [ FORM_PROVIDERS, Title],
  directives: [ ROUTER_DIRECTIVES, XLarge ],
  pipes: [],
  styles: [`
    .title {
      font-family: Arial, Helvetica, sans-serif;
    }
    main {
      padding: 1em;
    }

  `],
  template: `
    <header>
      <h1 class="title">Hello {{ title.value }}</h1>
      <nav>
        <a [routerLink]=" ['Home'] ">Home</a>
      </nav>
    </header>

    <main>
      <router-outlet></router-outlet>
    </main>

    <footer x-large>
      WebPack Angular 2 Starter by <a [href]="url">@AngularClass</a>
    </footer>
  `
})
@RouteConfig([
  { path: '/', component: Home, name: 'Home' }
])
export class App {
  url: string = 'https://twitter.com/AngularClass';
  constructor(public title: Title) {}
}
