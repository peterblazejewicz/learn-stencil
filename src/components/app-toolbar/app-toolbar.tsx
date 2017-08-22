import { Component, Prop } from '@stencil/core';


@Component({
  tag: 'app-toolbar',
  styleUrl: 'app-toolbar.scss'
})
export class AppToolbar {

  render() {
    return (
      [
        <div class="left-bar-item"></div>,
        <div class="logo">
            <a href="/" aria-label="SHOP Home">SHOP</a>
        </div>,
        <div class="cart-btn-container"></div>
      ]
    );
  }
}