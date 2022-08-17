import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

interface NavigationProps {}

const Navigation: FC<NavigationProps> = () => {
  interface NavItem {
    id: number;
    to: string;
    label: string;
  }

  const navItems: NavItem[] = [
    { id: 1, to: '/', label: 'Home' },
    { id: 2, to: '/cart', label: 'Cart' },
    { id: 3, to: '/about', label: 'About' },
    { id: 4, to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="flex items-center justify-center h-full px-5">
      <ul className="flex justify-between items-center h-full space-x-5 sm:space-x-10 text-lg font-light">
        {navItems.map(({ id, to, label }) => (
          <li key={id}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                `block font-normal transition-all duration-300 hover:scale-110 ${
                  isActive ? 'border-b-2 border-slate-900' : ''
                }`
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
