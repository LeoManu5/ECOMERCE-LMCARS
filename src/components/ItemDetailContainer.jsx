import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { getProductById } from '../asyncMock';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getProductById(id).then((response) => {
      setProduct(response);
    });
  }, [id]);

  return (
    <div>
      {product ? <ItemDetail product={product} /> : <p>Loading...</p>}
    </div>
  );
};

export default ItemDetailContainer;
