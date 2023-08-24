import {Link} from 'react-router-dom'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='duvidas'>
        <p className='tel'>Dúvidas? Ligue  <span className='telefone'>0800 591 2876</span> </p>

        </div>
        <div className='RodaPe'>

        
       <div className='rodape'>
         
          <Link className='rodapeLink'>Perguntas frequentes</Link>
          <Link className='rodapeLink'>Media Center</Link>
          <Link className='rodapeLink'>Resgatar cartão pré-pago</Link>
          <Link className='rodapeLink'>Termos de Uso</Link>
          <Link className='rodapeLink'>Informações corporativas</Link>
          <Link className='rodapeLink'>Avisos legais</Link>
         
       </div>
       <div className='rodape'>
         
          <Link className='rodapeLink'>Central de Ajuda</Link>
          <Link className='rodapeLink'>Media Center</Link>
          <Link className='rodapeLink'>Comprar cartão pré-pago</Link>
          <Link className='rodapeLink'>Privacidade</Link>
          <Link className='rodapeLink'>Entre em contato</Link>
          <Link className='rodapeLink'>Só na Netflix</Link>
         
       </div>
       <div className='rodape'>
         
          <Link className='rodapeLink'>Conta</Link>
          <Link className='rodapeLink'>Carreiras</Link>
          <Link className='rodapeLink'>Formas de assistir</Link>
          <Link className='rodapeLink'>Preferências de cookies</Link>
          <Link className='rodapeLink'>Teste de velocidade</Link>
          
         
       </div>
       </div>
    </div>
  )
}

export default Footer