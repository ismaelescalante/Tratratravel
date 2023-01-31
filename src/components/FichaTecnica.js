import React from 'react'
import '../styles/fichaTecnica.css'

const FichaTecnica = ({provinceInfo, setFichaTecnica}) => {
    console.log(provinceInfo.nombre);
    return (
    <div className='divFichaTecnica'>
        <div className='infoFicha'>
            <span className='closeBTN' onClick={() => setFichaTecnica('')}>X</span>
            <div>{`La provincia de ${provinceInfo.nombre} tiene ${provinceInfo.habitantes} habitantes`}</div>
            <div className='listados'>
                <ul>
                    {provinceInfo.pueblosDestacados.map((pueblo, index) => <li key={index}>{pueblo}</li>)}
                </ul>
                <ul>
                    {provinceInfo.platosTipicos.map((plato, index) => <li key={index}>{plato}</li>)}
                </ul>
                <ul>
                    {provinceInfo.fiestasPopulares.map((fiesta, index) => <li key={index}>{fiesta}</li>)}
                </ul>
            </div>
            <img src={provinceInfo.img} alt={`img de ${provinceInfo.nombre}`} />
        </div>
    </div>
  )
}

export default FichaTecnica