import React, { Fragment, useState } from 'react'

const Pregunta = () => {

//Definir el state
const [ cantidad, guardarCantidad ] = useState(0);

//Funcion que lee el presupuesto
    const definirPresupuesto = e => {
        console.log(e.target.value);        
    }
    
  return (
    <Fragment>
      <h2>Añade tu presupuesto</h2>

      <form>
        <input
          type='number'
          className='u-full-width'
          placeholder='Añade tu presupuesto'
          onChange={definirPresupuesto}
        />
        <input
          type='submit'
          className='button-primary u-full-width'
          value='Añadir Presupuesto'
        />
      </form>
    </Fragment>
  )
}

export default Pregunta
