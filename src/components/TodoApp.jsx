import React, { useState } from 'react'
import { Todo } from './todo';

export const TodoApp = () => {
  const [title, setTitle] = useState();
  const [todos, setTodos] = useState([]);

  // funcion para capturar el calor del input 
  const handleChange = (e) => {
    const change = e.target.value;
    setTitle(change)
  }
  // Funcion para crear todos
  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodos = {
      id: crypto.randomUUID(),
      title: title,
      status: false
    }
    // maneras de agregar un todo a un arreiglo, usamos los estados. 
    const todoDefault = [...todos];

    todoDefault.unshift(newTodos);

    setTodos(todoDefault);

    setTitle('');

    // una forma mas sensilla es 
    // setTodos([...todos,newTodos])
  }

  const handlOnUpdate = (id, value) => {

    const todoUpdate = [...todos];
    // devuelve un true un false si encuentra la id
    const item = todoUpdate.find((item) => item.id === id)
    // si lo encuentras asignale a item title el valor nuevo
    item.title = value;
    // steo el nuevo arr. 
    setTitle(todoUpdate)

  }

  const handlDelete = (id) => {
    const temp = todos.filter((item) => item.id !== id);
    setTodos(temp);
  }

  return (
    <div className="containerTodo">
      <form className="todoCreate-form" onSubmit={handleSubmit}>
        <input value={title} onChange={handleChange} type='text' className="inputTodo" />
        <input
          onClick={handleSubmit}
          type="submit"
          value="Create todo"
          className="ButtonCreate"
        />
        <div>{todos.map(todo => (
          <Todo key={todo.id} value={todo.title} status={todo.status} id={todo.id} OnUpdate={handlOnUpdate} onDelete={handlDelete} />
        ))}
        </div>
      </form>
    </div>
  );
}
