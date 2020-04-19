import React, { Fragment, useState } from 'react'

const Pregunta = () => {

//Definir el state
const [ cantidad, guardarCantidad ] = useState(0);

//Funcion que lee el presupuesto
    const definirPresupuesto = e => {
        guardarCantidad( parseInt(e.target.value, 10) )        
    }

// Submit para definir el presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault();

        // Validar


        // Si se pasa la validación
    }

  return (
    <Fragment>
      <h2>Añade tu presupuesto</h2>

      <form
        onSubmit={agregarPresupuesto}
      >
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
