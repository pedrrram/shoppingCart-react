import { IProduct } from '../types/IProduct';

export const products: IProduct[] = [
  {
    id: 1,
    name: 'Winter body',
    description: [
      { support: 'گارانتی مادام العمر' },
      { support: 'ارسال رایگان' },
      { support: 'اورجینال' },
    ],
    price: 120,
    offPrice: 120,
    discount: 0,
    image: 'https://m.media-amazon.com/images/I/81u+baLFsOS._AC_UX695_.jpg',
    quantity: 0,
  },
  {
    id: 2,
    name: 'Adidas',
    description: [{ support: 'گارانتی مادام العمر' }, { support: 'اورجینال' }],
    price: 110,
    offPrice: 100,
    discount: 8,
    image:
      'https://m.media-amazon.com/images/I/71gClWl4NuL._AC_SX695._SX._UX._SY._UY_.jpg',
    quantity: 0,
  },
  {
    id: 3,
    name: 'Vans',
    description: [
      { support: 'گارانتی مادام العمر' },
      { support: 'اورجینال' },
      { support: 'ارسال رایگان' },
    ],
    price: 99,
    offPrice: 89,
    discount: 10,
    image:
      'https://m.media-amazon.com/images/I/71MsbhoDUkL._AC_SY695._SX._UX._SY._UY_.jpg',
    quantity: 0,
  },
  {
    id: 4,
    name: 'White',
    description: [
      { support: 'گارانتی مادام العمر' },
      { support: 'اورجینال' },
      { support: 'ارسال رایگان' },
    ],
    price: 260,
    offPrice: 220,
    discount: 15,
    image:
      'https://m.media-amazon.com/images/I/81g0MiOqwAL._AC_SX695._SX._UX._SY._UY_.jpg',
    quantity: 0,
  },
  {
    id: 5,
    name: 'Croopped-shoe',
    description: [
      { support: 'گارانتی مادام العمر' },
      { support: 'اورجینال' },
      { support: 'ارسال رایگان' },
    ],
    price: 150,
    offPrice: 150,
    discount: 0,
    image:
      'https://m.media-amazon.com/images/I/81QOp+4+MfL._AC_SX695._SX._UX._SY._UY_.jpg',
    quantity: 0,
  },
  {
    id: 6,
    name: 'Blues',
    description: [
      { support: 'گارانتی مادام العمر' },
      { support: 'اورجینال' },
      { support: 'ارسال رایگان' },
    ],
    price: 220,
    offPrice: 200,
    discount: 13,
    image:
      'https://m.media-amazon.com/images/I/61AcVWy+21L._AC_SY695._SX._UX._SY._UY_.jpg',
    quantity: 0,
  },
];
