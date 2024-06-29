import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Watchhistory from './pages/Watchhistory'
import Header from './components/Header'
import Footer from './components/Footer'
import Landingpage from './pages/Landingpage'

function App() {

  return (
    <>
    <Header/>
    {/* SLASH represents baseURL */}
  <Routes> 
    <Route path='/' element={<Landingpage/>} />
    <Route path='/home' element={<Home/>}/>
    <Route path='/watch-history' element={<Watchhistory/>}/>
  </Routes>
  <Footer/>
    </>
  )
}

export default App
