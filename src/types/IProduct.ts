export interface IProduct {
  id: number;
  sku: number;
  title: string;
  quantity: number;
  description: string;
  availableSizes: string[];
  style?: string;
  price: number;
  isFreeShipping: boolean;
}
