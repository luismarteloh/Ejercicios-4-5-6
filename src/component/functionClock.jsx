import React, { useEffect, useState } from 'react'

export default function FunctionClock() {
    const [state, setState] = useState({

        fecha: new Date(),
        nombre: 'Martin',
        apellidos: 'San José',
        edad: 0,
    })

    useEffect(() => {

        console.log('me actualizé')
        setInterval(
            () => setState({
          ...state,
          edad: state.edad+1,
          fecha: new Date(),
        }), 1000
        )

        
      },);

  return (
    <div>
      <h2>Hora Actual: {state.fecha.toLocaleTimeString()}</h2>
      <h3>{state.nombre} {state.apellidos}</h3>
      <h1>Edad: {state.edad}</h1>
    </div>
  )
}
