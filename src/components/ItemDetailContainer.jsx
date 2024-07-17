import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const products = [
    { id: 1, category: 'alarmas', title: 'Alarma', description: 'Alarma de alta seguridad', price: 1000 },
    { id: 2, category: 'polarizados', title: 'Polarizado', description: 'Polarizado para autos', price: 2000 },
    { id: 3, category: 'levanta-vidrios', title: 'Levanta vidrios eléctrico', description: 'Levanta vidrios eléctrico de alta calidad', price: 1500 },
    { id: 4, category: 'llaves-codificadas', title: 'Llave codificada', description: 'Llave codificada de última generación', price: 3000 },
];

const ItemDetailContainer = () => {
    const { itemId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const foundProduct = products.find(prod => prod.id === parseInt(itemId));
        setProduct(foundProduct);
    }, [itemId]);

    return (
        <div>
            {product ? (
                <div className="card" style={{ width: '18rem' }}>
                    <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">{product.description}</p>
                        <p className="card-text">${product.price}</p>
                    </div>
                </div>
            ) : (
                <p>Producto no encontrado</p>
            )}
        </div>
    );
};

export default ItemDetailContainer;
