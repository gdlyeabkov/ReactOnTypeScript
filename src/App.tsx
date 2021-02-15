import {BrowserRouter,Switch,Route} from 'react-router-dom'
import {ITodo} from './interfaces'
import {Navbar} from './components/Navbar'
import React,{useState} from 'react';
import React,{useEffect,useState} from 'react'


// function App() {
//   return <h1>hello Ts</h1>
// }
const App:React.FC=() =>{
  
      
    }))
  }
  // return <h1>hello Ts</h1>
    return <BrowserRouter>
            <Navbar/>
            <div className="container">
              <Switch>
              <Route component={TodosPage} path="/" exact/>
              <Route component={AboutPage} path="/about"/>
              </Switch>
              {/* <h1>Test</h1> */}
              
            </div>
          </BrowserRouter> 
}
export default App;
