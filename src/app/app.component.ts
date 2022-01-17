import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  heading = 'Saqiasks';
  
  constructor() {
    setTimeout(() => {
        this.heading = "Todo list in Angular Framework"
      }, 3000);
    }   
      
}
