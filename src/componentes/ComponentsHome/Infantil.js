import FilmInfantil from './img/criançasImagem.png'

const Infantil = () => {
  return (
    <div className='Infantil'>
         <div>
            <h1 className='h1kids'>Crie perfis para <span className='limites1'>crianças</span> </h1>
            <p className='p'>Deixe as crianças se aventurarem com seus personagens favoritos em um espaço feito só para elas, sem pagar a mais por isso.</p>
         </div>
         <div className='image'>
           <img src={FilmInfantil} />
         </div>

    </div>
  )
}

export default Infantil