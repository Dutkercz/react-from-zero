export interface Item {
  id: number;
  name: string;
  price: number;
  hasDiscount: boolean;
  info?: {
    label: string;
    value: string;
  }[];
}
