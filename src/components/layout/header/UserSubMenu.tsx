import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import LogoutIcon from '../../icons/LogoutIcon';
import UserIcon from '../../icons/UserIcon';

interface UserSubmenuProps {}

const UserSubmenu: FC<UserSubmenuProps> = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-sky-100 rounded-xl shadow overflow-hidden absolute right-20 mt-3">
      <div
        onClick={() => navigate('/profile')}
        className="flex w-full justify-start items-center space-x-3 cursor-pointer px-5 py-3 border-l-4 border-transparent transition-all hover:border-sky-600"
      >
        <UserIcon />
        <span>Profile</span>
      </div>
      <div className="flex w-full justify-start items-center space-x-3 cursor-pointer px-5 py-3 border-l-4 border-transparent transition-all hover:border-sky-600">
        <LogoutIcon />
        <span>Logout</span>
      </div>
    </div>
  );
};

export default UserSubmenu;
