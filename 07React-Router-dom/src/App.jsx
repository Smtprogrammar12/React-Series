import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-pink-500'>Hello</h1>
      <Header></Header>
    </>
  )
}

export default App
