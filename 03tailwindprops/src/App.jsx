import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let Obj = {
    name: 'anis',
    age: 18,
    address: {
      city: 'kolea',
      state:'tipaza',
      country: 'Algeria'
    }
  }
  let newArr = [1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ]

  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3'>Vite with taiwind</h1>
      <Card username="hitesh" myArr = {newArr}/>
      <Card username='Json'post='Staff Engg.'/>
      <Card />
    </>
  )
}

export default App
