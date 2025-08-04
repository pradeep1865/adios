import 'dotenv/config';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

import dbConnect from '../lib/mongodb.js';
import Product from '../models/Product.js';

async function seed() {
  await dbConnect();
  await Product.deleteMany({});

  await Product.create([
    {
      name: 'Soft Plush Teddy',
      price: 499,
      image: '/teddy.jpg',
      description: 'Lovely plush teddy for kids.'
    },
    {
      name: 'Baby Diapers Pack',
      price: 899,
      image: '/diapers.jpg',
      description: 'Super soft & absorbent diapers.'
    },
    {
      name: 'Kids Story Book',
      price: 299,
      image: '/book.jpg',
      description: 'Illustrated story book for children.'
    }
  ]);
  console.log('Seeded!');
  process.exit();
}

seed();
