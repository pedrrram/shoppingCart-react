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
  ];

  return (
    <header className="w-full bg-sky-100 h-16">
      <nav className="flex items-center justify-center h-full px-5">
        <ul className="flex justify-between items-center h-full space-x-5">
          {navItems.map(({ id, to, label }) => (
            <li key={id}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-md block hover:bg-sky-200 ${
                    isActive ? 'bg-sky-300 hover:bg-sky-300' : ''
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
