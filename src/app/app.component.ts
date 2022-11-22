import { Component, OnInit } from '@angular/core';
import { IRate } from './models/rate';
import { RatesService } from './services/rates.service';
import { exchangeRates } from './data/exchange-rates';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'currency converter';

  exchangeRates: IRate[] = [];

  constructor(private ratesService: RatesService) {}

  ngOnInit(): void {
    this.ratesService.getAll().subscribe((exchangeRates) => {
      // console.log(exchangeRates);
      this.exchangeRates = exchangeRates;
    });
  }

  // getClass(item: any) {
  //   return console.log(this.exchangeRates.filter((i: any) => i.cc == item));
  // }
}
