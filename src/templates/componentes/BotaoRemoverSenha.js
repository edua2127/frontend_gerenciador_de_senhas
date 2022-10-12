import React from 'react'
import {useRemoverSenha} from '../hook/useRemoverSenha'
const BotaoRemoverSenha = ({idSenha, token, useReceberItems}) => {

    const useRemove = () => {
        useRemoverSenha(idSenha, token)
        useReceberItems()
    }
  return (
    <div>
        <button onClick={useRemove}>Remover</button>
    </div>
  )
}

export default BotaoRemoverSenha