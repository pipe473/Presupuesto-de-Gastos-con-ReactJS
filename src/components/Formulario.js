import React, { useState } from 'react';

const Formulario = () =>{
    const [ nombre, guardarombre ] = useState('');
    const [ cantidad, guardarCantidad ] = useState(0);
}

const Formulario = () => {
    return ( 
        <form>
            <h2>Agrega tus gastos aquí</h2>

            <div className="campo">
                <label>Nombre del Gasto</label>
                <input 
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                />
            </div>

            <div className="campo">
                <label>Cantidad a Gastar</label>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                />
            </div>

            <input 
                type="submit"
                className="button-primary full-width"
                value="Agregar Gasto"
              />

        </form>
     );
}
 
export default Formulario;