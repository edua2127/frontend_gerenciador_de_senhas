import React, { useState } from 'react'
import './Login.module.css'
const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const [usuario, setUsuario] = useState("")
    const [token, setToken] = useState("")

    const [senhas, setSenhas] = useState([])

    const useLogin = (e) => {
        e.preventDefault()
        const usuario = {
            username,
            password
        }  
        const requesicao = async() => {
                const res = await fetch('http://localhost:8080/login', {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body: JSON.stringify(usuario)
                });
                const json = res
                setToken(json)
        }

        requesicao()
        console.log(token)
    }
    
  return (
    <div className='pagina_login'>
        <h2>Gerenciador de Senha</h2>
        <form onSubmit={useLogin}>
            <label>
                <span>Nome de Usuário</span>
                <input type={'text'} value={username} onChange={(event)=> setUsername(event.target.value)}/>
            </label>
            <label>
                <span>Senha</span>
                <input type={'text'} value={password} onChange={(event)=> setPassword(event.target.value)}/>
            </label>
            <input type="submit" value={'login'}/>
        </form>
    </div>
  )
}

export default Login