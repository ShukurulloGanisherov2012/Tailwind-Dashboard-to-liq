import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import AppLayout from './layouts/AppLayout'
import Login from './pages/Login'
import Register from './pages/Register'
import NotFound from './pages/NotFound'
import MainLayout from './layouts/MainLayout'
import Carusel from './pages/Carusel'
import { Futbolkalar } from './pages/Futbolkalar'
import Tumorlar from './pages/Tumorlar'
import Krosovkalar from './pages/Krosovkalar'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<AppLayout />} >
          <Route path='/login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/' element={<MainLayout />} >
            <Route path='/' element={<Carusel/>} />
            <Route path='/futbolkalar' element={<Futbolkalar/>}/>
            <Route path='/tumorlar' element={<Tumorlar/>}/>
            <Route path='/krosovkalar' element={<Krosovkalar/>}/>
          </Route>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
