export interface Product {
  description: string;
  price: number;
}

const phone: Product = {
  description: 'Nokia A1',
  price: 150.0,
};

const tablet: Product = {
  description: 'iPad Air',
  price: 250.0,
};

interface TaxCalculationOptions {
  tax: number;
  products: Product[];
}
//                                                         /* le decimos que devuelve una tupla */
// function taxCalculator( options: TaxCalculationOptions): [number, number] {
//   let total: number = 0;                              /* O sea, un arreglo de 2 numeros solamente */
//
// function taxCalculator({ tax, products }: TaxCalculationOptions): [number, number] {
//   let total: number = 0;

export function taxCalculator(options: TaxCalculationOptions): [number, number] {
  let total: number = 0;

  const { tax, products } = options; // asi es mas legible.

  products.forEach(({ price }) => {
    total += price;
  });

  return [total, total * tax];
}

const shoppingCart: Product[] = [phone, tablet];

const tax: number = 0.15;

const [total, taxTotal]: number[] = taxCalculator({
  products: shoppingCart,
  tax: tax,
});

// console.log('Total', total);
// console.log('Tax', taxTotal);

export {};
