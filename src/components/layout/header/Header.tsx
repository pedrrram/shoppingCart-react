import { FC } from 'react';
import CartIcon from '../../icons/CartIcon';
import HeartIcon from '../../icons/HeartIcon';
import UserIcon from '../../icons/UserIcon';
import Navigation from '../navigation/Navigation';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <header className="w-full bg-sky-100 h-auto py-5 sm:py-0 sm:h-24 flex items-center justify-center">
      <section className="container max-w-7xl mx-auto px-5 xl:px-0">
        <div className="flex flex-col space-y-5 sm:space-y-0 sm:flex-row justify-center items-center sm:justify-between">
          <h1 className="text-3xl font-medium">Shop</h1>
          <Navigation />
          <div className="flex items-center space-x-5">
            <UserIcon />
            <CartIcon />
            <HeartIcon />
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
