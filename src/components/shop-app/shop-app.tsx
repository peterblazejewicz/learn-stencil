import { Component, Element } from "@stencil/core";

@Component({
  tag: "shop-app",
  styleUrl: "shop-app.scss"
})
export class ShopApp {
  @Element() element: HTMLElement;

  componentDidLoad() {
    this.element.removeAttribute("unresolved");
  }

  render() {
    return [
      <shop-analytics key="UA-39334307-16" />,
      <stencil-router id="router">
        <stencil-route
          url="/"
          component="home-page"
          router="#router"
          exact={true}
        />
      </stencil-router>,
      <app-header>
        <app-toolbar />
      </app-header>
    ];
  }
}
