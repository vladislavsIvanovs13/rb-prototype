import Landing from './pages/Landing'
import About from './pages/About'
import Basket from './pages/Basket'
import Authorization from './pages/Authorization'
import Registration from './pages/Registration'
import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className='app'>
      <NavBar/>
      <main>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/basket' element={<Basket/>}/>
          <Route path='/auth' element={<Authorization/>}/>
          <Route path='/register' element={<Registration/>}/>
        </Routes>
      </main>
    </div>
  )
}

export default App
