import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-card-header',
  templateUrl: './shopping-card-header.component.html',
  styleUrls: ['../shopping-card.component.scss'],
})
export class ShoppingCardHeaderComponent implements OnInit {
  @Input() itemNumbers: number;

  constructor() {}

  ngOnInit(): void {}
}
