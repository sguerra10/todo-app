import React, { useState } from 'react'

export const Todo = ({ value, OnUpdate, id, onDelete}) => {
    const [isEdit, setIsEdit] = useState(false);
    const [newValue, setNewValue] = useState(value);


    // reiniciamos el comportamiento por defecto del enviar
    const handleOnSubmit = (e) => {
        e.preventDefault();
    }

    // capturamos el valor cuando cambie y lo pasamos a una nueva instancia del estado 

    const handleOnChange = (e) => {

        const nValue = e.target.value;
        setNewValue(nValue);
    }


    // pasamos como parametro una funcion para luego llamarla con parametros heredado, esta funcion estara creada en el padre para poder actualizar el estado padre.
    function handleUpUpdate() {
        
        OnUpdate(id, newValue)
        setIsEdit(false);
    }
    
    function FormEdit() {
        return (
            <form id='formEdit' onSubmit={handleOnSubmit}>
                <input  onChange={handleOnChange}  type='text' value={newValue} id='edit' />
                <input type='submit' onClick={handleUpUpdate} value='Update' />
            </form>
        )
    }
    
    function TodoElement() {
        return (
            <div>
                <p> {newValue} </p>
                <button onClick={() => (
                    setIsEdit(true)
                )}> Modificar </button>
                <button onClick={
                  (e)=>  onDelete(id)
                }>Eliminar</button>
            </div>
        )
    }

    return (
        <div>
            {/* usamos un operador ternario para definir que componente mostrar o no  */}
            {isEdit ? <FormEdit /> : <TodoElement />}
        </div>
    )
}
