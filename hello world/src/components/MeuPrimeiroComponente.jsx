import React from 'react'

const MeuPrimeiroComponente = () => {

    function click(){
        console.log('clicou')
    }

  return (

    <div>
        
        <div>MeuPrimeiroComponente</div>
        
        <button onClick = {click}>Clique em mim</button>
    </div>
  )
}

export default MeuPrimeiroComponente