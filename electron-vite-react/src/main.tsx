import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'



// import './samples/node-api'
//import 'styles/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <App />
)

postMessage({ payload: 'removeLoading' }, '*')


