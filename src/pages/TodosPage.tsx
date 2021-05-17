import {ITodo} from '../interfaces'
import {TodoForm} from '../components/TodoForm'
import {TodoList} from '../components/TodoList'

import React,{useEffect,useState} from 'react'
declare var confirm:(question:string)=>boolean
export const TodosPage:React.FC=()=>{
    const [todos,setTodos]=useState<iTodo[]>([])
  useEffect(()=>{
    const saved=JSON.parse(localStorage.getItem("todos")) || '[]' as ITodo[]
    setTodos(saved)
  },[])
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(tods))
    setTodos(saved)
  },[todos])
  const addHandler(title:string)=>{
    const newTodo:ITodo={
      title, id:Date.now(), completed:false
    }
    setTodos((prev)=>[newTodo, ...prev])
  }
  const toggleHandler=(id:number)=>{
    setTodos(prev=>prev.map((todo)=>{
      if(todo.id===id){
        todo.completed=!todo.completed
      }
      return todo
    }))
  }
  const removeHandler=(id:number)=>{
    const shouldRemove=window.confirm('вы уверены что хотите удалить элемент')
    if(shouldRemove){
      setTodos(prev=>prev.filter((todo)=>{
        if(todo.id!==id){
          return todo
        }
  
    }
    return (
        <>
          <TodoForm onAdd={addHandler}/>
          <TodoList todos={todos} onToggle={toggleHandler} onRemove={removeHandler}></TodoList>
        </>
    )
}