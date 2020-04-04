import { Component, OnInit } from '@angular/core';
import {CurrencyClientService} from '../../services/currency-client.service';
import {RootObject} from '../../services/currency-client.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  result: string;
  rootObject: RootObject;

  constructor(private currencyClientService: CurrencyClientService) {
  }

  ngOnInit(): void {
    this.currencyClientService.getCurrency().subscribe( value => {
      this.rootObject = value;
    });
  }

  checkCurrency(value: number) {

    if (value > this.rootObject.rates.PLN) {
      this.result = 'Value too HIGH';
    } else if (value < this.rootObject.rates.PLN) {
      this.result = 'Value too LOW';
    } else {
      this.result = 'CONGRATULATIONS, YOU WON!';
    }
  }
}
