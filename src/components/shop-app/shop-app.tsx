import { Component } from '@stencil/core';


@Component({
  tag: 'shop-app',
  styleUrl: 'shop-app.scss'
})
export class ShopApp {

  render() {
    return (
      <app-header>
        <app-toolbar></app-toolbar>
      </app-header>
    );
  }
}