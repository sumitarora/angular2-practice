import {Directive, Component, ElementRef, Renderer} from 'angular2/core';

@Directive({
  selector: '[x-large]'
})
export class XLarge {
  constructor(element: ElementRef, renderer: Renderer) {
    renderer.setElementStyle(element, 'fontSize', 'x-large');
  }
}
