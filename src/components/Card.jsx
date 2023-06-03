//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

import "../index.css"

const Card = (props) => {
    



  return (
    <div className="card-container">
    <p>Hola {props.input1}</p>
    <p>tu animal favorito es {props.input2}</p>



    </div>
  )
}

export default Card