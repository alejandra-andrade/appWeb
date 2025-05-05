import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo } from '../../reducers/todoSlice';

const Item = ({ name }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeTodo(name)); 
  };

  return (
    <div className="card">
      <p>{name}</p>
      <button onClick={handleRemove}>Eliminar tarea</button>
    </div>
  );
};

export default Item;