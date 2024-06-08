import ProductOne from "../assets/products/productOne.png";
import ProductTwo from "../assets/products/productTwo.png";

import ProductThree from "../assets/products/productThree.png";

import ProductFour from "../assets/products/productFour.png";

import ProductFive from "../assets/products/productFive.png";

import ProductSix from "../assets/products/productSix.png";

import ProductSeven from "../assets/products/productSeven.png";

import ProductEight from "../assets/products/productEight.png";

interface Product {
  id: number;
  name: string;
  price: number;
  img: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Açaí 2lt com banana Alcaí",
    price: 24.99,
    img: ProductOne,
  },
  {
    id: 2,
    name: "Sorvete de Flocos Nestle",
    price: 34.99,
    img: ProductTwo,
  },
  {
    id: 3,
    name: "Sorvete de chocolate S&B",
    price: 24.99,
    img: ProductThree,
  },
  {
    id: 4,
    name: "Frutas Vermelhas 1kg",
    price: 35.99,
    img: ProductFour,
  },
  {
    id: 5,
    name: "Frutas vermelhas 250gr",
    price: 11.99,
    img: ProductFive,
  },
  {
    id: 6,
    name: "Sorvete de Pudim Big Milk",
    price: 44.99,
    img: ProductSix,
  },
  {
    id: 7,
    name: "Sorvete Napolitano Diêlo",
    price: 21.99,
    img: ProductSeven,
  },
  {
    id: 8,
    name: "Açaí com Guaraná Cremoso",
    price: 28.99,
    img: ProductEight,
  },
];
