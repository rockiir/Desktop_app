import { useState } from 'react'
//import styles from 'styles/app.module.scss'
import Login from '../src/Pages/Login'


const App: React.FC = () => {
  const [count, setCount] = useState(0)

  return (
    <div >
      <header >
      < Login />

      </header>
    </div>
  )
}

export default App
