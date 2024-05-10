import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
function Myapp(){
    return(
        <h1>custom app</h1>
    )
}
//standard way to create react element
const reactElement=React.createElement(
    'a',
    {href:"https://google.com",target:"_blank"},
    'click me to visit'
)
ReactDOM.createRoot(document.getElementById('root')).render(

    // Myapp() //we can declare function like this
    reactElement
    // <App />
  
)
