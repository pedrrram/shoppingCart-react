import { IProduct } from '../types/IProduct';

export const totalDiscountedPrice = (products: IProduct[]) => {
  const discountedTotal: number = products.reduce(
    (sum, pr) => sum + pr.offPrice * pr.quantity,
    0
  );
  return discountedTotal;
};
