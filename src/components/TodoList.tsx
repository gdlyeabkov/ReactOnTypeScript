import React,{useEffect,useState} from 'react'
declare var confirm:(question:string)=>boolean
type TodoListProps={
    todos:ITodo[]
    onToggle(id:number):void
    onremove:(id:number)=>void
}
export const TodoList:React.FC<TodoListProps>=({todos,onRemove,onToggle})=>{
    if(todos.length===0){
        return <p className="center">Пока дел нет</p>
    }
    const removeHandler=(event:React.MouseEvent,id:number)=>{
        // event.stopPropagation()
        event.preventDefault()
        onRemove(number)
    }
    const classes=[
        'todo'
    ]
    if(todo.completed){
        classes.push('completed')
    }

    return (
        <ul>
            {todos.map(todo=>{
                return (
                    <li className={classes.join(' ')} key={todo.id}>
                <label>
                    <input onChange={onToggle.bind(null,todo.id)} checked={todo.completed} type="checkbox"/>
                    <span>{todo.title}</span>
                    <i onClick={(event)=>removeHandler(event,todo.id)} className="mateerial-icons red-text">delete</i>
                </label>
            </li>
                )
            })}
            
        </ul>
    )
}