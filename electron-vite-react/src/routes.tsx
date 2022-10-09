import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from './Pages/Home';
import Login from './Pages/Login';
import Cadastro from '../src/Pages/Cadastro'
import Tabela from '../src/Components/Tabela'
import Dashboard from '../src/Components/Dashboard'

class RoutesApp extends Component {
  render() {
    return (
      <BrowserRouter>
      <Link to="/Home">Home</Link>
      <br></br>
      <Link to="/Cadastro">cad</Link>
      <br></br>
      <Link to="/Login">Login</Link>
      <br></br>
      <Link to="/Login">Login</Link>

      <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Cadastro" element={<Cadastro />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />

      </Routes>
  </BrowserRouter>
    )
  }
}
export default RoutesApp
