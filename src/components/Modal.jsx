import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openModal, closeModal } from './modalSlice';

const Modal = () => {
  const isOpen = useSelector(state => state.modal.isOpen);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(openModal())}>Open Modal</button>
      {isOpen && (
        <div>
          <div>Modal Content</div>
          <button onClick={() => dispatch(closeModal())}>Close Modal</button>
        </div>
      )}
    </div>
  );
};

export default Modal;
