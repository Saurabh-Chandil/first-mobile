import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'first-mobile';
  displayMenu = false;

  ngOnInit(): void {
    this.displayMenu = false;
  }
  
  barsClicked() {
    console.log("BARs clicked");
    this.displayMenu = true;
  }

  hideMenu() {
    console.log("hide menu");
    this.displayMenu = false;
  }
}
