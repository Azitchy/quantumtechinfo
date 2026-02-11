import { useState } from 'react'
import { header as Header } from './Components/header.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
    </>
  )
}

export default App
