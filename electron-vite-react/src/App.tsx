import { useState } from 'react'
import styles from 'styles/app.module.scss'
import Login from '../src/Pages/Login'


const App: React.FC = () => {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
      < Login />

      </header>
    </div>
  )
}

export default App
