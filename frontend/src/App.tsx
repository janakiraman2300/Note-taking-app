import { useState } from 'react'
import NavBar from './Component/NavBar'
import MainNotes from './Component/MainNotes'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='font-medium font-mono overflow-x-clip'>
      <NavBar />
      <MainNotes />
    </div>
  )
}

export default App
