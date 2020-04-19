import React, { Fragment } from 'react'

const Pregunta = () => {
  return (
    <Fragment>
      <h2>Añade tu presupuesto</h2>

      <form>
        <input
          type='number'
          className='u-full-width'
          placeholder='Añade tu presupuesto'
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
