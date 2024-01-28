import Perfil from "./componentes/Perfil"
import './App.css'

import perfil1 from "./imagenes/perfil-1.avif"
import perfil2 from "./imagenes/perfil-2.jpg"
import perfil3 from "./imagenes/perfil-3.png"

function App() {


  return (
    <>
      <h1>quien-seguir</h1>
      <div className='perfiles-contenedor'>
        <h2 className='perfiles-titulo'>A quién seguir</h2>
        <div>
          <Perfil
          imagen={perfil1}
          nombre="Alberto Sanchez"
          usuario="albertosancheztv"
          />
          <Perfil
          imagen={perfil2}
          nombre="Patricio Mileto"
          usuario="patriciomilenario1"
          />
          <Perfil
          imagen={perfil3}
          nombre="Maria Piran"
          usuario="mariamariposa254"
          />
        </div>
        <a className='perfiles-mas' href='#'>Mostrar más</a>
      </div>
    </>
  )
}

export default App
