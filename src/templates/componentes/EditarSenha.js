import React, { useEffect, useState } from 'react'

const EditarSenha = ({senhaAtual, setFormularioAtivo, token, useReceberItems}) => {
    const [idSenhaAtual, setIdSenhaAtual] = useState(senhaAtual !== null ? senhaAtual.id : '')
    const [descricaoSenhaAtual, setDescricaoSenhaAtual] = useState(senhaAtual  !== null  ? senhaAtual.descricao : '')
    const [passwordSenhaAtual, setPasswordSenhaAtual] = useState( senhaAtual  !== null  ? senhaAtual.password : '')
    const [urlSenhaAtual, setUrlSenhaAtual] = useState(senhaAtual  !== null  ? senhaAtual.url : '')

    const useEditarSenha = (e) => {
        e.preventDefault()
        const requesicao = async() => {

                const data = {
                    descricao: descricaoSenhaAtual,
                    password: passwordSenhaAtual,
                    url: urlSenhaAtual
                }
                const res = await fetch('http://localhost:8080/api/senha/' + idSenhaAtual, {
                    method: 'PUT',
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization":token
                    },
                    body: JSON.stringify(data)
                });
                console.log(res.status)
        }
        requesicao()
        setFormularioAtivo(false)
        useReceberItems()
    }
  return (
    <div>
         <h1>EditarSenha Senha</h1>
         <form onSubmit={useEditarSenha}>
            <label>
                <span>Descricao</span>
                <input type={'text'} value={descricaoSenhaAtual} onChange={(event)=> setDescricaoSenhaAtual(event.target.value)}/>
            </label>
            <label>
                <span>Senha</span>
                <input type={'text'} value={passwordSenhaAtual} onChange={(event)=> setPasswordSenhaAtual(event.target.value)}/>
            </label>
            <label>
                <span>URL</span>
                <input type={'text'} value={urlSenhaAtual} onChange={(event)=> setUrlSenhaAtual(event.target.value)}/>
            </label>
            <input type="submit" value={'Cadastrar'}/>
        </form>


    </div>
  )
}

export default EditarSenha