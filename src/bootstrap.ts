import {bootstrap} from 'angular2/platform/browser';
import {ELEMENT_PROBE_PROVIDERS} from 'angular2/platform/common_dom';
import {ROUTER_PROVIDERS, LocationStrategy,
    PathLocationStrategy, APP_BASE_HREF} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {provide} from 'angular2/core';

import {TodoService} from './todo-app/todo-service';
import {TodoApp} from './todo-app/todo-app';
export function main3() {
  return bootstrap(TodoApp, [
    TodoService
  ])
  .catch(err => console.error(err));
}


import {App} from './app/app';
export function main4() {
  return bootstrap(App, [
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    ELEMENT_PROBE_PROVIDERS
  ])
  .catch(err => console.error(err));
}

import {RouterApp} from './router-app/router-app';
export function main() {
  return bootstrap(RouterApp, [
      ROUTER_PROVIDERS,
      provide(LocationStrategy, { useClass: PathLocationStrategy })
    //   provide(APP_BASE_HREF, {useValue: '/my/app'})
  ])
  .catch(err => console.error(err));
}

import {HelloApp} from './hello-app/hello-app';
export function main2() {
    return bootstrap(HelloApp)
    .catch(err => console.error(err));
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

var appId = getParameterByName('appId');
console.log(appId);

export function init() {
    if (appId == '0') {
        main();
    } else if (appId == '1') {
        main2();
    } else if (appId == '2') {
        main3();
    } else if (appId == '3') {
        main4();
    }
}

document.addEventListener('DOMContentLoaded', init);
