import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
function Myapp(){
    return(
        <h1>custom app</h1>
    )
}
ReactDOM.createRoot(document.getElementById('root')).render(

    // Myapp() //we can declare function like this
    <App />
  
)
