import React, { useState } from 'react'

const BotaoEditarSenha = ({valorSenhaAtual, setSenhaAtual, setFormularioAtivo}) => {

    const escolherSenha = () => {
        setSenhaAtual(valorSenhaAtual)
        setFormularioAtivo(true)  
    }
  return (
    <div>
        <button onClick={escolherSenha}>Editar</button>
    </div>
  )
}

export default BotaoEditarSenha