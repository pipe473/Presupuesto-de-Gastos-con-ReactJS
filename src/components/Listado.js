import React from 'react';
import Gasto from './Gasto';

const Listado = ({}) =>  ( 
    <div className="gastos-realizados">
        <h2>Listado</h2>
        {gastos.map(gasto =>(
            <Gasto 
                gasto={gasto}
            />
        ))}

    </div>
 );

 
export default Listado;