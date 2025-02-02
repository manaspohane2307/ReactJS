import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card  from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    name: 'Manas',
    age: 21,
    address: {
      city: 'Nagpur',
      state: 'Maharashtra',
      country: 'India'
    }
  }

  let newArr = [1,2,3,4,5,6,7,8,9]

  return (
    <>
      <h1 className='text-3xl bg-green-400'>Vite with Tailwind</h1>
      <Card username='manas' myArr = {newArr}/>
      <Card username='rasika' post='chief technology officer'/>
      <Card/>
    </>
  )
}

export default App
