import Landing from './pages/Landing'
import About from './pages/About'
import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </main>
  )
}

export default App
