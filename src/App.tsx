import { useState } from 'react'
import './App.css'
import Nav from './assets/Components/Nav/Nav'
import Home from './assets/Views/Home/Home'

function App() {

  const [view, setView] = useState<string>("home")

  return (
    <>
      <Nav setView={setView} />
      {view === "home" ?
        <Home setView={setView} />
        :
        <div>Return to home</div>
      }
    </>
  )
}

export default App
