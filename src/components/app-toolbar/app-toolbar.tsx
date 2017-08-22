import { Component } from "@stencil/core";

@Component({
  tag: "app-toolbar",
  styleUrl: "app-toolbar.scss"
})
export class AppToolbar {
  render() {
    return [
      <div class="left-bar-item" />,
      <div class="logo">
        <stencil-route-link router="#router" url="/" aria-label="SHOP Home">
          SHOP
        </stencil-route-link>
      </div>,
      <div class="cart-btn-container" />
    ];
  }
}
