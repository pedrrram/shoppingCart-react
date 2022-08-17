import { FC } from 'react';
import { IProduct } from '../../types/IProduct';
import MinusIcon from '../icons/MinusIcon';
import PlusIcon from '../icons/PlusIcon';
import RemoveIcon from '../icons/RemoveIcon';

interface ProductItemProps {
  product: IProduct;
}

const ProductItem: FC<ProductItemProps> = ({ product }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 py-3 px-5 gap-4 grid-flow-col justify-items-center border-b-2 last:border-none border-slate-300 border-dashed items-center">
      <div className="h-36 w-36 sm:w-44 bg-white rounded-2xl">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full rounded-2xl object-contain"
        />
      </div>
      <div className="col-start-2 col-span-2 py-5 text-xl font-light flex flex-col justify-self-start">
        <span className="font-bold">{product.name}</span>
        <span>Price: ${product.price * product.quantity}</span>
        <div className="flex items-center col-start-2 bg-sky-100 justify-between w-fit space-x-5 px-3 py-2 rounded-lg mt-5">
          {product.quantity === 1 ? <RemoveIcon /> : <MinusIcon />}
          <span>{product.quantity}</span>
          <PlusIcon />
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
