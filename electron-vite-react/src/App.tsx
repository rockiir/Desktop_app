import { useState } from 'react'
//import styles from 'styles/app.module.scss'
import Login from '../src/Pages/Login'
import Cadastro from '../src/Pages/Cadastro'


const App: React.FC = () => {
  const [count, setCount] = useState(0)

  return (
    <div >
      <header >
      < Login />
      < Cadastro />

      </header>
    </div>
  )
}

export default App
