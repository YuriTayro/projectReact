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
            <option key={i}>{item}</option>
            ))
        }

  return (
    <div>
        <select name="" id="">
        {linha()}  
        </select>
    </div>
  )
}

export default Lista