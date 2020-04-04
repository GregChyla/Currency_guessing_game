import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Simple currency guessing game';
  title2 = 'Using https://api.exchangeratesapi.io';
  name: string;
}
