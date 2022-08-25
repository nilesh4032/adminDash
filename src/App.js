import Home from "./pages/home/Home"; 
import Login from "./pages/login/Login";
import Task from "./pages/task/Task"; 
import List from "./pages/list/List"; 
import New from "./pages/new/New"; 
import Single from "./pages/single/Single"; 

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
       <BrowserRouter>
    <Routes>
      <Route path="/">
          <Route index element={<Home/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="list" element={<List/>}/>
          <Route path="users">
            <Route index element={<List/>}/>
            <Route path=":userId" element={<Single/>}/>
            <Route path="new" elemnt={<New/>}/>
          </Route>
      
      <Route path="task">
        <Route indexx element={<List/>}/>
        <Route path=":taskId" element={<Single/>}/>
        <Route path="new" elemnt={<New/>}/>
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
    </div>
      </div>
    )
  }
}

