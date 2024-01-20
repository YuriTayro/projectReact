import React from 'react'
import {useState} from 'react'


const SetData = () => {

    const [numero, setNumber] = useState(1)

    function soma(){
        setNumber(numero +1)        
    }

    function subtrai(){
        if(numero !=1){
            console.log(numero)
            setNumber(numero -1)
        }
    }

  return (
    <div>
        <button onClick={subtrai}>-</button>
        <input 
        type="number"  
        value={numero} 
        onChange={(e)=> setNumber(Math.floor(e.target.value))}
        />
        <button onClick = {soma}>+</button>      
    </div>
  )
}

export default SetData