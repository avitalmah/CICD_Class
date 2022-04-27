import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Nika ',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Avital',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      title: 'Black Bag',
      slug: 'Black-Bag',
      type: 'Men',
      category: 'Backpack',
      color: 'Black',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality shirt',
    },
    {
      title: 'Black1 Bag',
      slug: 'Black1-Bag',
      type: 'Men',
      category: 'Backpack',
      color: 'Black',
      image: 'https://images.unsplash.com/photo-1597671053855-1132c40cc1ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
      price: 220,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality shirt',
    },
    {
      title: 'Black2 Bag',
      slug: 'Black2-Bag',
      type: 'Men',
      category: 'Backpack',
      color: 'Black',
      image: 'https://images.unsplash.com/photo-1581605405669-fcdf81165afa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
      price: 320,
      countInStock: 0,
      brand: 'Nike',
      rating: 3,
      numReviews: 10,
      description: 'high quality shirt',
    },
  ],
};
export default data;
