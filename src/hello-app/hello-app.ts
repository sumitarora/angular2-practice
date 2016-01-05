import {Component, View} from 'angular2/core';
import {SayHello} from './say-hello';

@Component({
  selector: 'hello-app'
})
@View({
  directives: [SayHello],
  template: `
  <div>
    <say-hello></say-hello>
  </div>
  `
})
export class HelloApp {}
