import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const products = [
  { id: 1, name1: "laptop", brand: "Dell", Qnty: 1 },
  { id: 2, name1: "laptop", brand: "lenovo", Qnty: 1 },
  { id: 3, name1: "laptop", brand: "Hp", Qnty: 1 },
];

const Keys = () => {
  const [items, setItem] = useState(products);

  const changeQuantity = (id) => {
    const newItems = items.map((item) =>
      item.id === id ? { ...item, Qnty: item.Qnty + 1 } : item
    );

    setItem(newItems);
  };

  return (
    <div>
      {items.map((product) => (
        <div key={product.id}>
          <h1>{product.name1}</h1>
          <h3>{product.brand}</h3>
          <h6>{product.Qnty}</h6>
          <Button onClick={() => changeQuantity(product.id)}>+</Button>
        </div>
      ))}
    </div>
  );
}

export default Keys;
