import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html"
})
export class MenuComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  toogleMenu(menu) {
    menu.classList.toggle("collapse");
  }
}

