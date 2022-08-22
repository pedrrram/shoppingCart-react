import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Layout from '../components/layout/Layout';
import ChevronRight from '../components/icons/ChevronRight';
import MailIcon from '../components/icons/MailIcon';
import PhoneIcon from '../components/icons/PhoneIcon';
import UserIcon from '../components/icons/UserIcon';

import { useAuth } from '../providers/auth/AuthProvider';
import { useCart } from '../providers/cart/CartProvider';

import { totalDiscountedPrice } from '../utils/totalDiscountedPrice';

interface CheckoutProps {}

const Checkout: FC<CheckoutProps> = () => {
  const navigate = useNavigate();
  const { userData } = useAuth();
  const {
    cart: { products },
  } = useCart();

  useEffect(() => {
    if (!products.length || !userData) {
      navigate('/');
    }
  }, [userData, products]);

  const totalDiscounted = totalDiscountedPrice(products);

  return (
    <Layout>
      <main className="flex flex-col items-center max-w-screen-md mx-auto">
        <section className="bg-sky-50 w-full rounded-xl shadow-xl overflow-hidden">
          <div className="bg-sky-100 p-4 flex justify-center items-center">
            <h2 className="text-3xl font-thin">Checkout</h2>
          </div>
          <div className="p-5">
            <div className="flex space-x-5">
              <div className="space-y-5 basis-1/2">
                <div className="text-xl flex space-x-3 text-left font-thin pb-3 border-b-2 border-dashed border-slate-500">
                  <p>Your Information</p>
                </div>
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
              <div className="basis-1/2 space-y-5">
                <div className="text-xl flex space-x-3 text-left font-thin pb-3 border-b-2 border-dashed border-slate-500">
                  <p>Cart Items</p>
                </div>
                {products.map((product) => (
                  <div key={product.id} className="w-full flex items-center">
                    <ChevronRight />
                    <div className="ml-3 flex text-lg">
                      <p className="font-medium">{product.name}</p>
                      <p className="ml-4">
                        ${product.offPrice * product.quantity}
                      </p>
                    </div>
                  </div>
                ))}
                <div className="text-xl flex space-x-3 text-left font-thin pt-3 border-t-2 border-dashed border-slate-200">
                  <p>Total: ${totalDiscounted}</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <button className="bg-sky-600 text-white py-3 rounded-xl mt-5 font-medium w-1/2">
                Pay
              </button>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Checkout;
