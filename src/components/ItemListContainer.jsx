import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Item from './Item';

const products = [
    { id: 1, category: 'alarmas', title: 'Alarma', description: 'Alarma de alta seguridad', price: 1000 },
    { id: 2, category: 'polarizados', title: 'Polarizado', description: 'Polarizado para autos', price: 2000 },
    { id: 3, category: 'levanta-vidrios', title: 'Levanta vidrios eléctrico', description: 'Levanta vidrios eléctrico de alta calidad', price: 1500 },
    { id: 4, category: 'llaves-codificadas', title: 'Llave codificada', description: 'Llave codificada de última generación', price: 3000 },
];

const ItemListContainer = ({ greeting }) => {
    const { categoryId } = useParams();
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        if (categoryId) {
            setFilteredProducts(products.filter(product => product.category === categoryId));
        } else {
            setFilteredProducts(products);
        }
    }, [categoryId]);

    return (
        <div>
            <h1>{greeting}</h1>
            <div className="product-list">
                {filteredProducts.map(product => (
                    <Item key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ItemListContainer;
