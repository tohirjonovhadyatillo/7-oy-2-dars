import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem, incrementQuantity, decrementQuantity } from './cartSlice';

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleAddItem = () => {
    const newItem = { id: Date.now(), name: 'Item ' + Date.now(), quantity: 1 };
    dispatch(addItem(newItem));
  };

  return (
    <div>
      <button onClick={handleAddItem}>Add Item</button>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.name} - {item.quantity}
            <button onClick={() => dispatch(incrementQuantity({ id: item.id }))}>+</button>
            <button onClick={() => dispatch(decrementQuantity({ id: item.id }))}>-</button>
            <button onClick={() => dispatch(removeItem({ id: item.id }))}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
