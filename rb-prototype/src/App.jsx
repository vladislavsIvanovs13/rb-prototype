import Landing from './pages/Landing'
import About from './pages/About'
import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className='main'>
      <NavBar/>
      <main>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </main>
    </div>
  )
}

export default App
