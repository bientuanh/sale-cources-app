import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-card-footer',
  templateUrl: './shopping-card-footer.component.html',
  styleUrls: ['../shopping-card.component.scss'],
})
export class ShoppingCardFooterComponent implements OnInit {
  @Input() subTotal: number;
  @Input() tax: number;
  @Input() total: number;
  @Input() promoMoney: any;

  @Output() onClickPromoCodeBtnEventEmitter = new EventEmitter();
  @Output() onClickCheckOutEventEmitter = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClickPromoCodeBtn(promoCode: string) {
    this.onClickPromoCodeBtnEventEmitter.emit(promoCode);
  }

  onClickCheckOutBtn () {
    this.onClickCheckOutEventEmitter.emit()
  }
}
