import { Product, taxCalculator } from './06-function-destructuring';

const shoppingCart: Product[] = [
  {
    description: 'Nokia',
    price: 100,
  },
  {
    description: 'iPad',
    price: 500,
  },
];

// tax = 0.21
const [total, tax]: [number, number] = taxCalculator({
  products: shoppingCart,
  tax: 0.21,
});

console.log('Total', total);
console.log('Tax', tax);
