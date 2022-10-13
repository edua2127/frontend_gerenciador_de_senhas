import React, { useEffect, useState } from 'react'
import BotaoEditarSenha from '../componentes/BotaoEditarSenha'
import BotaoRemoverSenha from '../componentes/BotaoRemoverSenha'
import EditarSenha from '../componentes/EditarSenha'
import Senha from '../componentes/Senha'
import './Login.css'




const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const [usuario, setUsuario] = useState("")
    const [token, setToken] = useState(null)

    const [senhas, setSenhas] = useState([])
    const [formularioAtivo, setFormularioAtivo] = useState(false)

    const [senhaAtual, setSenhaAtual] = useState(null)


    const useLogin = (e) => {
        e.preventDefault()
        const requesicao = async() => {
                const res = await fetch('http://localhost:8080/login', {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body: new URLSearchParams({
                        'username': username,
                        'password': password,
                    })
                });
                const json = await res.text()
                setToken(json)
        }

        requesicao()
        useReceberItems()
        console.log(token)
    }
    
    const useReceberItems = () => {
        const fetchData = async() => {
            const res = await fetch('http://localhost:8080/api/senha', {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization":token
                },
            })
            const json = await res.json()
            setSenhas(json)
        }
        fetchData()
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

        {token !== null && ( <button onClick={useReceberItems}>Atualizar Lista</button>)}
       

        {token !== null && (
            <table>
                <tr>
                    <th>ID</th>
                    <th>Descricao</th>
                    <th>URL</th>
                    <th>Senha</th>
                </tr>
                    {senhas.map((senha1)=> 
                    (
                        <tr> 
                            <td>{senha1.id}</td>
                            <td>{senha1.descricao}</td>
                            <td>{senha1.url}</td>
                            <td>{senha1.password}</td>
                            <BotaoRemoverSenha idSenha={senha1.id} token={token} useReceberItems={useReceberItems} key={senha1.id}/>
                            <BotaoEditarSenha setSenhaAtual={setSenhaAtual} valorSenhaAtual={senha1} setFormularioAtivo = {setFormularioAtivo}/>
                        </tr>
                    ))}
            </table>
        )}

        {token !== null && <Senha token={token} useReceberItems={useReceberItems}/>}

        {formularioAtivo&& <EditarSenha senhaAtual={senhaAtual} setFormularioAtivo={setFormularioAtivo} useReceberItems={useReceberItems} token={token}/>}
    </div>
  )
}

export default Login