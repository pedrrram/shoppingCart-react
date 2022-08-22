import { FC } from 'react';
import MailIcon from '../components/icons/MailIcon';
import PhoneIcon from '../components/icons/PhoneIcon';
import UserIcon from '../components/icons/UserIcon';
import Layout from '../components/layout/Layout';
import { useAuth } from '../providers/auth/AuthProvider';

interface ProfileProps {}

const Profile: FC<ProfileProps> = () => {
  const { userData } = useAuth();
  return (
    <Layout>
      <main className="flex flex-col items-center max-w-screen-md mx-auto">
        <section className="bg-sky-50 w-full rounded-xl shadow-xl overflow-hidden">
          <div className="bg-sky-100 p-4 flex justify-center items-center">
            <h2 className="text-3xl font-thin">Profile</h2>
          </div>
          <div className="flex flex-col items-start justify-around min-h-[270px] p-10 space-y-5">
            <div className="text-lg flex space-x-3 text-left">
              <UserIcon />
              <p>{userData?.name}</p>
            </div>
            <div className="text-lg flex space-x-3">
              <MailIcon />
              <p>{userData?.email}</p>
            </div>
            <div className="text-lg flex space-x-3">
              <PhoneIcon />
              <p>{userData?.phoneNumber}</p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Profile;
