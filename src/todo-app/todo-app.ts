import {Component, View} from 'angular2/core';

import {TodoService} from './todo-service';
import {TodoInput} from './todo-input';
import {TodoList} from './todo-list';

@Component({
  selector: 'todo-app'
})
@View({
  directives: [TodoInput, TodoList],
  template: `
  <div>
    <todo-input></todo-input>
    <todo-list></todo-list>
  </div>
  `
})
export class TodoApp {
}
