import React, { useState } from 'react'

export const Todoform = ({addTodo}) => {
    const [value , setValue] = useState("")
    const handlerSubmit = e =>{
        e.preventDefault();

        addTodo(value)
        setValue("")
    }
    return (
    <form className='TodoForm' onSubmit={handlerSubmit}>
        <input type="text" className='todo-input' placeholder='enter text' value={value} onChange={(e)=>setValue(e.target.value)}/>
        <button type='submit' className='todo-btn'>Add Text</button>
    </form>
  )
}
