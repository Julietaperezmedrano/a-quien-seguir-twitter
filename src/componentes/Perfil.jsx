import React from 'react'
import "../estilos/Perfil.css"

const Perfil = (props) => {
  return (
    <div className='perfil-contenedor'>
      <img className='perfil-imagen' src={props.imagen} />
      <h3 className='perfil-nombre' >{props.nombre}</h3>
      <h3 className='perfil-usuario'>@{props.usuario}</h3>
      <button>Seguir</button>
    </div>
  )
}

export default Perfil
