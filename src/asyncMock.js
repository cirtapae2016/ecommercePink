//import Producto from "./pages/producto"

const lista_productos = [
  {
    id: 1,
    title: "Fjallraven Foldsack",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "mujer",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    stock: 120,
    rating: {
      rate: 3.9,

      lala: 5,
    },
  },
  {
    id: 2,
    title: "Mens Premium ",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "hombre",
    image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    stock: 259,
    rating: {
      rate: 4.1,
    },
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    category: "hombre",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    stock: 500,
    rating: {
      rate: 4.7,
    },
  },
  {
    id: 4,
    title: "Mens Casual Slim",
    price: 15.99,
    description:
      "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    category: "mujer",
    image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    stock: 430,
    rating: {
      rate: 2.1,
    },
  },
  {
    id: 5,
    title: "Hardy Women's ",
    price: 695,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    category: "joyeria",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    stock: 400,
    rating: {
      rate: 4.6,
    },
  },
];

// export default lista_productos;

export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      //let cantidad  = Math.floor(Math.random() * lista_productos.length);
      //console.log("Cantidad de productos devueltos en el asyncMock:", cantidad);
      resolve(lista_productos);
    }, 500);
  });
};

export const getProductById = (idProduct) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(lista_productos.find((prod) => prod.id == idProduct));
    }, 500);
  });
};

export const getProductsByCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(lista_productos.filter((prod) => prod.category == category));
    }, 500);
  });
};
