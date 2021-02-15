import { useHistory} from 'react-router-dom'
import React from 'react'
export const AboutPage:React.FC=()=>{
    const history=useHistory()
    return (
        <>
            <h1>Страница информации</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis maxime dolor debitis exercitationem officia non obcaecati voluptates ad suscipit reprehenderit!</p>
            <button className="btn" onCLick={()=>history.push('/')}>обратно к списку дел</button>
        </>
    )
}