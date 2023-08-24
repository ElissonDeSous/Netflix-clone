import React from 'react'

const Banner = () => {
  return (
    <div>
         <div className='banner'>
          <h2>Filmes, séries e muito mais,  sem <br/><span className='limites'>limites</span></h2>

        

          <p className="paragrafo">Assista onde quiser. Cancele quando <span className="limites">quiser</span> .</p>

          <p className="paragrafo2">Quer assistir? Informe seu email para criar ou reiniciar sua <span className="limites">assinatura</span></p>

      <form>
        <label className="label">
          <input className='emailTopo' type='email' placeholder = "Email"/>
       
        </label>
        <button className="butao">Vamos la</button> 
      </form>
      </div>
    </div>
  )
}

export default Banner