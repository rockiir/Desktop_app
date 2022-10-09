import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
//import './login.css'
import Pedido from '../../Components/Pedido'
import Dashboard from '../../Components/Dashboard'
import Tabela from '../../Components/Tabela'



const Home = () => {
  return (
    <div>
    <header >
    < Dashboard />
    < Tabela />
    </header>
  </div>
  )
}

export default Home
