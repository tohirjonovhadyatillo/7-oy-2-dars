import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Counter from './Counter';
import Cart from './Cart';
import Modal from './Modal';
import TodoList from './TodoList';
import PlayersList from './PlayersList';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Redux Toolkit Example</h1>
        <Counter />
        <Cart />
        <Modal />
        <TodoList />
        <PlayersList />
      </div>
    </Provider>
  );
};

export default App;
