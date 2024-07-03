import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import AppLayout from './layouts/AppLayout'
import Login from './pages/Login'
import Register from './pages/Register'
import NotFound from './pages/NotFound'
import MainLayout from './layouts/MainLayout'
import Dashboard from './pages/Dashboard/Dashboard'
import Products from './pages/Dashboard/Products'
import UserInfo from './pages/Dashboard/UserInfo'
import UserKPI from './pages/Dashboard/UserKPI'
import Tasksk from './pages/Dashboard/Tasksk'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<AppLayout/>} >
          <Route path='/' element={<Login/>} />
          <Route path='register' element={<Register/>} />
          <Route path='*' element={<NotFound/>} />
          <Route path='dashboard' element={<MainLayout/>} >
            <Route index element={<Dashboard/>} />
            <Route path='products' element={<Products />} />
            <Route path='tasks' element={<Tasksk/>} />
            <Route path='userinfo' element={<UserInfo/>} />
            <Route path='userkpi' element={<UserKPI/>} />
          </Route>
        </Route>
      </Routes> 
    </Router>
  )
}

export default App
