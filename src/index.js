import React from "react"
import * as ReactDOMClinet from 'react-dom/client';
import App from './App'
import './css/main.css'

const app = ReactDOMClinet.createRoot(document.getElementById('root'))

app.render(<App />)