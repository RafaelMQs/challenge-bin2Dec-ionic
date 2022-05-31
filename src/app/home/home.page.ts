import { Component, Renderer2 } from "@angular/core";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  descTitle: string[] = [
    "Welcome to bin2Dec.",
    "Use this terminal to convert numbers.",
    "You may type cls to clear inputs/outputs."
  ]

  constructor() {}


}
