import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRate } from '../models/rate';

@Injectable({
  providedIn: 'root',
})


export class RatesService {
  constructor(private http: HttpClient) {}

  // exchangeRates: IRate[] = []

  getAll(): Observable<IRate[]> {
    return this.http.get<IRate[]>(
      'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'
    );
  }
}
