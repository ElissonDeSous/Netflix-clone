import { useState } from "react"

const Card = () => {

    const [card, setCard] = useState(false)
    const [card2, setCard2] = useState(false)
    const [card3, setCard3] = useState(false)
    const [card4, setCard4] = useState(false)
    const [card5, setCard5] = useState(false)
    const [card6, setCard6] = useState(false)

    const CardPerguntas = () =>{
        setCard(!card)
    }
    const CardPerguntas2 = () =>{
        setCard2(!card2)
    }
    const CardPerguntas3 = () =>{
        setCard3(!card3)
    }
    const CardPerguntas4= () =>{
        setCard4(!card4)
    }
    const CardPerguntas5 = () =>{
        setCard5(!card5)
    }
    const CardPerguntas6 = () =>{
        setCard6(!card6)
    }
   
  return (
    <div className="cardContainer">
        <div>
           <h1 className="h1Card">Perguntas frequentes</h1>
        </div>
        <div>
            <div className= {card ? 'Card cardAtivado':'Card  cardDesativado'} onClick={CardPerguntas} >
              <div className="carDesativado">
               <p className="titulo3">O que é a Netflix?</p>
              </div>

              <div className="cardAtivado">
                 <p className="pCard">A Netflix é um serviço de streaming que oferece uma ampla variedade de séries, filmes e documentários premiados em milhares de aparelhos conectados à internet.</p>
                 <p className="pCard">Você pode assistir a quantos filmes e séries quiser, quando e onde quiser – tudo por um preço mensal acessível. Aqui você sempre encontra novidades. A cada semana, adicionamos novas séries e filmes.</p>

              </div>
            </div>
            <div className= {card2 ? 'Card cardAtivado':'Card  cardDesativado'} onClick={CardPerguntas2} >
              <div className="carDesativado">
               <p className="titulo3">Quanto custa a netflix?</p>
              </div>

              <div className="cardAtivado">
                 <p className="pCard">Assista à Netflix no seu celular, tablet, Smart TV, notebook ou aparelho de streaming por uma taxa mensal única. Os planos variam de R$18,90 a R$55,90 por mês. Sem contrato nem taxas extras.</p>

              </div>
            </div>
            <div className= {card3 ? 'Card cardAtivado':'Card  cardDesativado'} onClick={CardPerguntas3} >
              <div className="carDesativado">
               <p className="titulo3">Onde posso assistir?</p>
              </div>

              <div className="cardAtivado">
                 <p className="pCard">Assista onde quiser, quando quiser. Faça login com sua conta Netflix em netflix.com para começar a assistir no computador ou em qualquer aparelho conectado à Internet compatível com o aplicativo Netflix, como Smart TVs, smartphones, tablets, aparelhos de streaming e videogames.</p>
                 <p className="pCard">Você também pode baixar a sua série favorita com o aplicativo Netflix para iOS, Android ou Windows 10. Use downloads para levar a Netflix para onde quiser sem precisar de conexão com a Internet. Leve a Netflix com você para qualquer lugar.</p>

              </div>
            </div>
            <div className= {card4 ? 'Card cardAtivado':'Card  cardDesativado'} onClick={CardPerguntas4} >
              <div className="carDesativado">
               <p className="titulo3">Como eu faço para cancelar?</p>
              </div>

              <div className="cardAtivado">
                 <p className="pCard">A Netflix é flexível. Não há contratos nem compromissos. Você pode cancelar a sua conta na internet com apenas dois cliques. Não há taxa de cancelamento – você pode começar ou encerrar a sua assinatura a qualquer momento.</p>

              </div>
            </div>
            <div className= {card5 ? 'Card cardAtivado':'Card  cardDesativado'} onClick={CardPerguntas5} >
              <div className="carDesativado">
               <p className="titulo3">O que eu posso assistir na netflix?</p>
              </div>

              <div className="cardAtivado">
                 <p className="pCard">A Netflix tem um grande catálogo de filmes, documentários, séries, originais Netflix premiados e muito mais. Assista o quanto quiser, quando quiser.</p>

              </div>
            </div>
            <div className= {card6? 'Card cardAtivado':'card  cardDesativado'} onClick={CardPerguntas6} >
              <div className="carDesativado">
               <p className='titulo3'>Netflix é adequada para crianças?</p>
              </div>

              <div className="cardAtivado">
                 <p className="pCard">A experiência infantil da Netflix faz parte da sua assinatura para que as crianças se divirtam em seu próprio espaço com séries e filmes familiares sob a supervisão dos responsáveis</p>
                 <p className="pCard">O recurso de controle parental, incluso nos perfis para crianças e protegido por PIN, permite restringir a classificação etária do conteúdo que as crianças podem ver e bloquear títulos específicos que você não quer que elas assistam.</p>

              </div>
            </div>
        </div>
        <div>
           <p className="pCard1">Quer assistir? Informe seu email para criar ou reiniciar sua assinatura.</p>

           <form>
            <label className="cardInput">
              <input className="emailTopo" type='email' placeholder = 'Email' />
            </label>
            <button className="butao">Vamos la</button>
           </form>
        </div>
    </div>
  )
}

export default Card