// import {createElement} from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <div>
      <h1>Harsh</h1>
      <h1>Duanshi</h1>
    </div>
  )
}
// is element ko directly call kara do
const Element = (
  <a href='https://google.com' target='_blank'>Dabao Na</a>
)

const reactEle = React.createElement(
  'a', {href:'https://google.com'},
  'Phir Se Daba Do Yaar'
)
// using createElement method of React
const reactElement = 
createRoot(document.getElementById('root')).render(
  <div>
    {reactEle}
    <MyApp/>
    {Element}
   <App />
  </div>  
)

// createRoot(document.getElementById('root')).render(
//   Element
// )

