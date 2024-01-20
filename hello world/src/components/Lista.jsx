import React, {useState} from 'react'

const Lista = () => {

    const [meses] = useState([
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezebro"
    ])

    function linha(){
       return  meses.map((item, i)=>(
        <li key={i}>{item}</li>
    ))
    }

  return (
    <div>
        <ul>{linha()}</ul>   
    </div>
  )
}

export default Lista