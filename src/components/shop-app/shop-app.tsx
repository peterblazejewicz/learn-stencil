import { Component, Element } from '@stencil/core';


@Component({
  tag: 'shop-app',
  styleUrl: 'shop-app.scss'
})
export class ShopApp {

  @Element()
  element: HTMLElement

  componentDidLoad() {
    this.element.removeAttribute("unresolved");
  }

  render() {
    return (
      <app-header>
        <app-toolbar></app-toolbar>
      </app-header>
    );
  }
}