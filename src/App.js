import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

//PAGINAS
import Home from "./pages/home/home"
import Register from "./pages/register/Register"
import Login from "./pages/login/Login"

// componentes
import Topo from "./componentes/header/header"
import Rodape from './componentes/footer/footer'




function App() {

  return (
   <BrowserRouter>
   <Topo/>
   <Routes>
      <Route path='/' element = {<Home/>} />
      <Route path='/login' element = {<Login/>} />
      <Route path='/registrar' element = {<Register/>} />
   </Routes>
   <Rodape/>
   </BrowserRouter>
  )
}

export default App
