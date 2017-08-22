import { Component, Element } from "@stencil/core";
import { ShopCategoryData } from '../shop-category-data/shop-category-data';


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
      <shop-category-data></shop-category-data>,
      <app-header>
        <app-toolbar />
      </app-header>
    ];
  }
}
