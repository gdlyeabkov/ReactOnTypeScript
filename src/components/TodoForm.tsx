
import React,{useRef,useState} from 'react'
interface TodoFormProps{
    onAdd(title:string):void
}
// export const TodoForm:React.FC<{onAdd(title:string):void}>=(props)=>{
export const TodoForm:React.FC<TodoFormProps>=(props)=>{
    // const [title,setTitle]=useState<string>('')
    const ref=useRef<HTMLInputElement>(null)
    
    // const changeHandler=(event:React.ChangeEvent<HTMLInputElement>)=>{
    //     setTitle(event.target.value)
    // }
    
    const keyPressHandler=(event:React.KeyboardEvent<HTMLInputElement>)=>{
        if(event.key==='Enter'){
        //     setTitle('')
            props.onAdd(ref.current!.value)
            console.log(ref.current!.value)
            ref.current!.value=''
        }
    }
    return (
        <div className="input-field mt2">
            <input type="text" onKeyPress={keyPressHandler} id="title" 
            // value={title}
            //  onChange={changeHandler}
             ref={ref} placeholder="Введите название дела"/>
            <label htmlFor="title" className="acitve">
                Введите название дела
            </label>
        </div>
    )
}