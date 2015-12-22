import {bootstrap} from 'angular2/platform/browser';
import {ELEMENT_PROBE_PROVIDERS} from 'angular2/platform/common_dom';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

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
    ROUTER_PROVIDERS
  ])
  .catch(err => console.error(err));
}

export function init() {
  main();
}
document.addEventListener('DOMContentLoaded', init);
