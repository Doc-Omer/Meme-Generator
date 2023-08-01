import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header.jsx'
// import Meme from './components/Meme'
import Meme from "./components/Meme.jsx"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Meme />
  </React.StrictMode>,
)
