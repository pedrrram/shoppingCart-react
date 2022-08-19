import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Navigation from '../navigation/Navigation';
import { useCart } from '../../../providers/cart/CartProvider';
import CartIcon from '../../icons/CartIcon';
import HeartIcon from '../../icons/HeartIcon';
import UserIcon from '../../icons/UserIcon';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const {
    cart: { products },
  } = useCart();

  let [itemsNumber, setItemsNumber] = useState<number>(0);
  const cartCounting = () => {
    setItemsNumber(0);
    products.forEach((pr) =>
      setItemsNumber((itemsNumber) => (itemsNumber += pr.quantity))
    );
  };

  useEffect(() => {
    cartCounting();
  }, [products]);

  return (
    <header className="w-full bg-sky-100 h-auto py-5 sm:py-0 sm:h-24 flex items-center justify-center">
      <section className="container max-w-7xl mx-auto px-5 xl:px-0">
        <div className="flex flex-col space-y-5 sm:space-y-0 sm:flex-row justify-center items-center sm:justify-between">
          <h1 className="text-3xl font-medium">Shop</h1>
          <Navigation />
          <div className="flex items-center space-x-5">
            <Link to="/login">
              <UserIcon />
            </Link>
            <Link to="/cart">
              <div className="relative">
                {itemsNumber > 0 && (
                  <div className="inline-flex absolute -top-3 -right-3 justify-center items-center w-6 h-6 text-xs font-bold text-white bg-sky-500 rounded-full border-2 border-slate-900">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                    <span>{itemsNumber}</span>
                  </div>
                )}
                <CartIcon />
              </div>
            </Link>
            <HeartIcon />
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
