import {bootstrap} from 'angular2/platform/browser';
import {ELEMENT_PROBE_PROVIDERS} from 'angular2/platform/common_dom';
import {ROUTER_PROVIDERS, LocationStrategy, PathLocationStrategy, APP_BASE_HREF} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {provide} from 'angular2/core';

// import {TodoService} from './todo-app/todo-service';
// import {TodoApp} from './todo-app/todo-app';
// export function main3() {
//   return bootstrap(TodoApp, [
//     TodoService
//   ])
//   .catch(err => console.error(err));
// }
//
// import {App} from './app/app';
// export function main2() {
//   return bootstrap(App, [
//     HTTP_PROVIDERS,
//     ROUTER_PROVIDERS,
//     ELEMENT_PROBE_PROVIDERS
//   ])
//   .catch(err => console.error(err));
// }

import {RouterApp} from './router-app/router-app';
export function main() {
  return bootstrap(RouterApp, [
      ROUTER_PROVIDERS,
      provide(LocationStrategy, { useClass: PathLocationStrategy })
    //   provide(APP_BASE_HREF, {useValue: '/my/app'})
  ])
  .catch(err => console.error(err));
}

// import {HelloApp} from './hello-app/hello-app';
// export function main() {
//     return bootstrap(HelloApp)
//     .catch(err => console.error(err));
// }

export function init() {
  main();
}
document.addEventListener('DOMContentLoaded', init);
