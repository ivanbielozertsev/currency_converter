import { Component, Input } from '@angular/core';
import { IRate } from 'src/app/models/rate';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() rate: [];
}
