export interface IProductItem {
  id?: number;
  title: string;
  description?: string;
  link: string;
  img: string;
  price: string;
  promo: boolean;
  collection?: string;
}
