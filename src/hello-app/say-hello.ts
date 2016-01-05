import {Component, View} from 'angular2/core';

@Component({
  selector: 'say-hello'
})
@View({
  template: `
  <div>
    Hello {{name}}!
    <button (click)="changeName()">Change Name</button>
  </div>
  `
})
export class SayHello {
    name: string;
    constructor() {
        this.name = 'World';
    }

    changeName() {
        this.name = 'changed';
    }

    ngOnInit() {
        console.log('ngOnInit');
    }

    ngOnChanges() {
        console.log('ngOnChanges');
    }

    ngDoCheck() {
        console.log('ngDoCheck');
    }

    ngAfterContentInit() {
        console.log('ngAfterContentInit');
    }

    ngAfterContentChecked() {
        console.log('ngAfterContentChecked');
    }

    ngAfterViewInit() {
        console.log('ngAfterViewInit');
    }

    ngAfterViewChecked() {
        console.log('ngAfterViewChecked');
    }

    ngOnDestroy() {
        console.log('ngOnDestroy');
    }
}
