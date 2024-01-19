import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './componentes/index'
import GlobalStyles from './styles/global'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles/>
    <App />
  </React.StrictMode>,
)
