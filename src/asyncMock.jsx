const products = [
  {
    id: 1,
    name: "Alarmas",
    category: "seguridad",
    description: "Sistema de alarmas para seguridad vehicular",
    price: 15000,
    image: "https://http2.mlstatic.com/D_NQ_NP_966761-MLA44571772479_012021-O.webp",
  },
  {
    id: 2,
    name: "Levanta vidrios",
    category: "confort",
    description: "Levanta vidrios eléctricos para mayor comodidad",
    price: 12000,
    image: "https://http2.mlstatic.com/D_NQ_NP_904101-MLA42092146675_062020-O.webp",
  },
  {
    id: 3,
    name: "Polarizados",
    category: "estética",
    description: "Vidrios polarizados para protección y estilo",
    price: 8000,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrcgb7K6qggsbTXqejCkYDvefcXbxWyNZjVg&s",
  },
  {
    id: 4,
    name: "Llaves codificadas",
    category: "seguridad",
    description: "Llaves codificadas para protección adicional",
    price: 5000,
    image: "https://www.clarin.com/2023/04/04/HftxEscfs_1256x620__1.jpg",
  },
  {
    id: 5,
    name: "Sensores de estacionamiento",
    category: "confort",
    description: "Sensores para facilitar el estacionamiento",
    price: 10000,
    image: "url-to-sensores-image",
  }
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};
