const products = [
  {
    id: 1,
    name: "Alarmas",
    category: "seguridad",
    description: "Sistema de alarmas para seguridad vehicular",
    price: 15000,
    image: "url-to-alarmas-image",
  },
  {
    id: 2,
    name: "Levanta vidrios",
    category: "confort",
    description: "Levanta vidrios eléctricos para mayor comodidad",
    price: 12000,
    image: "url-to-levanta-vidrios-image",
  },
  {
    id: 3,
    name: "Polarizados",
    category: "estética",
    description: "Vidrios polarizados para protección y estilo",
    price: 8000,
    image: "url-to-polarizados-image",
  },
  {
    id: 4,
    name: "Llaves codificadas",
    category: "seguridad",
    description: "Llaves codificadas para protección adicional",
    price: 5000,
    image: "url-to-llaves-codificadas-image",
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
