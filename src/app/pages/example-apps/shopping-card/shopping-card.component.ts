import { Component, OnInit } from '@angular/core';
import { IItem } from 'src/app/shared/models/shopping-cart/item-interface';
import { IShoppingCartPage } from 'src/app/shared/models/shopping-cart/shopping-cart-page.interface';

@Component({
  selector: 'app-shopping-card',
  templateUrl: './shopping-card.component.html',
  styleUrls: ['./shopping-card.component.scss'],
})
export class ShoppingCardComponent implements OnInit {
  items: IItem[] = [
    {
      id: 1,
      name: 'PRODUCT ITEM NUMBER 1',
      price: 5.99,
      description: 'Description for product item number 1',
      quantity: 2,
      thumbnail:
        'https://24hstore.vn/images/products/2019/09/11/large/iPhone-11-1_1568190016_1.jpg',
    },
    {
      id: 2,
      name: 'PRODUCT ITEM NUMBER 2',
      price: 9.99,
      description: 'Description for product item number 2',
      quantity: 5,
      thumbnail:
        'https://24hstore.vn/images/products/2019/09/11/large/iPhone-11-3_1568190016_1.jpg',
    },
    {
      id: 3,
      name: 'PRODUCT ITEM NUMBER 2',
      price: 120.99,
      quantity: 1,
      description: 'Description for product item number 2',
      thumbnail:
        'https://24hstore.vn/images/products/2020/04/16/large/iphone-8-plus-red.jpg',
    },
  ];

  promoCodes = [
    {
      code: 'anhbt1234',
      percent: 5,
    },
    {
      code: 'tuanhdeptrai',
      percent: 10,
    },
  ];

  subTotal = 0;
  itemNumbers = 0;
  tax = 0;
  total = 0;
  promoMoney = 0;
  shoppingCartInfo: IShoppingCartPage = {};

  private getSubTotal(): number {
    return +this.items
      .reduce((sum, item) => {
        return sum + item.price * item.quantity;
      }, 0)
      .toFixed(2);
  }

  private getItemNumbers(): number {
    return this.items.reduce((sum, item) => sum + item.quantity, 0);
  }

  private getTax(): number {
    return +(this.subTotal * 0.1).toFixed(2);
  }

  private getTotal(): number {
    return +(this.subTotal - this.tax - this.promoMoney).toFixed(2);
  }

  private updateAllState() {
    this.itemNumbers = this.getItemNumbers();
    this.subTotal = this.getSubTotal();
    this.tax = this.getTax();
    this.total = this.getTotal();
  }

  constructor() {}

  ngOnInit(): void {
    this.updateAllState();
  }

  onClickRemoveItem(id: number) {
    this.items = this.items.filter((item) => item.id !== id);
    this.updateAllState();
  }

  onChangeQuantity(data: any) {
    this.items = this.items.map((item) => {
      if (item.id === data.itemID) {
        return {
          ...item,
          quantity: +data.inputEle.value,
        };
      } else {
        return item;
      }
    });
    this.updateAllState();
  }

  onClickPromoCodeBtn(promoCode: string) {
    for (const promoInfo of this.promoCodes) {
      if (promoInfo.code === promoCode) {
        this.promoMoney = +(this.subTotal * (promoInfo.percent / 100)).toFixed(
          2
        );
      }
    }
    this.updateAllState();
  }

  onClickCheckOutBtn() {
    console.log(this.items);
    this.shoppingCartInfo.listItem = this.items;
    this.shoppingCartInfo.totalMoney = this.total;
    console.log(this.shoppingCartInfo);
    alert(this.shoppingCartInfo);
  }
}
