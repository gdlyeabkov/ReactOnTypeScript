import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {ITodo} from './interfaces'
import {Navbar} from './components/Navbar'
import React,{useEffect, useState} from 'react'


const App:React.FC=() =>{
  
}
  return <BrowserRouter>
            <Navbar/>
            <div className="container">
              <Switch>
                <Route component={TodosPage} path="/" exact/>
                <Route component={AboutPage} path="/about"/>
              </Switch>
            </div>
          </BrowserRouter>
export default App;
