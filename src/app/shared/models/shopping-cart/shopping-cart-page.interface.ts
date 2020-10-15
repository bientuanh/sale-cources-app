import { IItem } from './item-interface';

export interface IShoppingCartPage {
  listItem?: Array<IItem>;
  totalMoney?: number;
  promoCodeInfo?: any;
}
