import'./conteudos.css'
import AssistaOndeQuiser from './img/AssistaOndeQuiser.png'

const Conteudo1 = () => {
  return (
    <div className='Conteudo1'>
      <div className='image'>
        <img src={AssistaOndeQuiser} />
      </div>
      <div className='OndeQuiser'>
        <h1>Assista Onde quiser</h1>
        <p className='p'>Assista a quantos filmes e séries quiser no celular, tablet, laptop e TV.</p>
      </div>

    </div>
  )
}

export default Conteudo1