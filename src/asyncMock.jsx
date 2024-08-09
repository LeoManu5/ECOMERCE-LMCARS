export const products = [
    { id: 1, category: 'alarmas', name: 'Alarma X1', description: 'Alarma de alta seguridad.' },
    { id: 2, category: 'levanta-vidrios', name: 'Levantavidrios automático', description: 'Sistema de levantavidrios eléctrico.' },
    { id: 3, category: 'polarizados', name: 'Polarizado 3M', description: 'Polarizado de alta calidad.' },
    { id: 4, category: 'llaves-codificadas', name: 'Llave codificada', description: 'Llave con chip de seguridad.' },
  ];
  
  export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 1000);
    });
  };
  
  export const getProductById = (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find(product => product.id === parseInt(id)));
      }, 1000);
    });
  };
  