import "./home.css"
import TV from './img/Tv.png'
// componentes 
import Conteudo1 from '../../componentes/ComponentsHome/Conteudo1'
import Infantil from "../../componentes/ComponentsHome/Infantil";
import Mobile from "../../componentes/ComponentsHome/Mobile";
import Card from "../../componentes/ComponentsHome/card";

function Home (){
    const altura = 300;
    return(
  
        <div className="conteudo">
          <div className="natv">
            <div className="textoTv">
            <h1 className="titulo">Aproveite na TV</h1>
            <p className="p">Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros dispositivos.</p>
            </div>
      <img height= {altura} className = 'img' src={TV}/>
          </div>
          <Conteudo1/>
          <Infantil/>
          <Mobile/>
          <Card/>
        </div>
    )
}

export default Home