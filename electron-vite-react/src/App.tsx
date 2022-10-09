import { useState } from 'react'
//import styles from 'styles/app.module.scss'
import Login from '../src/Pages/Login'
import Cadastro from '../src/Pages/Cadastro'
import Home from '../src/Pages/Home'
import Tabela from '../src/Components/Tabela'
import Dashboard from '../src/Components/Dashboard'
import RoutesApp from "./routes";



const App: React.FC = () => {

  return (

    <div >
    <RoutesApp />

    </div>
  )
}

export default App
