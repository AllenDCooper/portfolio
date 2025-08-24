import './App.css'
import { Route, Routes } from 'react-router-dom';
import Nav from './assets/Components/Nav/Nav'
import Home from './assets/Views/Home/Home'
import Projects from './assets/Views/Projects/Projects';

function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/*" element={<div>Error</div>} />
      </Routes>
    </>
  )
}

export default App
