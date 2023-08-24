import MobileImg from './img/mobileimage.jpg'

const Mobile = () => {
  return (
    <div className='mobile'>
        <div className='image'>
         <img  src= {MobileImg} />
        </div>
        <div className='mobileText'>
           <h1 className='h1Mobile'>Baixe séries para  <span className='limites1'>assistir offline</span> </h1>
           <p className='p1'>Disponíveis somente em planos sem <span className='limites1'>anuncios</span>.</p>
        </div>
    </div>
  )
}

export default Mobile