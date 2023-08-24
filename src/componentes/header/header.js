import {Link} from "react-router-dom"
import Logo from "./img/netflixlogo.png"

import "./topo.css"

import Banner from "../ComponentsHome/Banner"

function Header () 
{
  return(
    
    <div className='Topo'>
      
      <div className='nav'>
        <div className="imageLogo">
      <Link  to = "/">
       <img className="logo" src={Logo} height = "90px"/>
      </Link>
      </div>
      <div className='nav-bar'>
         <Link className = "link" to="/login" >Entrar</Link>
         <Link className = "link" to= "/registrar" >Cadastrar</Link>
         </div>
      </div>
      <Banner/>
    </div>
    
  )
}
export default Header