import './register.css'
import {useState , useEffect} from "react"
import { UseAuthentication } from '../../hooks/authentication'

const Register = () => {
   const [Nome, setNome] = useState("")
   const [Email, setEmail] = useState("")
   const [Senha, setSenha] = useState("")
   const [ConfirmSenha, setConfrimSenha] = useState("")
   const [error,setError] = useState("")

   const {CriarUser,error: authError} = UseAuthentication()


   const cadastro = async (evento) => 
   {
      evento.preventDefault()

      setError("")
      const Usuario = {
        Nome,
        Email,
        Senha,
      }
      if(Senha != ConfirmSenha)
      {
           setError('senhas precisam ser iguais')
           return
      }
      console.log(Usuario);
   }
   
  

  return (
    <div className='Topo'>
        <div className='registra'>
        

        <form className='formulario' onSubmit={cadastro}>
        <h2 className='h2'>Cadastre-se e aproveite nosso catalogo <span className='tituloRegistro'>incrivel de filmes</span> </h2>
        <label>
            nome
            <input type='text'  placeholder='digite seu nome' value={Nome} onChange = {(e)=> setNome(e.target.value)}  />
        </label>
        <label>
            email
            <input type='email'  placeholder='digite seu email' value = {Email} onChange = {(e)=> setEmail(e.target.value)} />
        </label>
        <label>
            senha
            <input type='password'  placeholder='digite sua senha'value={Senha} onChange = {(e)=> setSenha(e.target.value)} />
        </label>
        <label>
            confirme senha
            <input type='password'  placeholder='confirme sua senha' value = {ConfirmSenha} onChange ={(e)=> setConfrimSenha(e.target.value)} />
        </label>

        <div className='botao'>
            <button className='button'>Entrar</button>
        </div>
        {error && <p className='error'>{error}</p>}
        </form>
        </div>
    </div>
  )
}

export default Register