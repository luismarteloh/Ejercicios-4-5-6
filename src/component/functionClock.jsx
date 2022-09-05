import React, { useEffect, useState } from 'react'

export default function FunctionClock() {
    const [state, setState] = useState({
        fecha: new Date(),
        nombre: 'Martin',
        apellidos: 'San José',
        edad: 0,
    })

    const newState = () => {
      setState({
        ...state,
        fecha: new Date(),
        edad: state.edad+1,
      })
    }

    useEffect(() => {
      console.log('actualizado')
      const intervalAge = setInterval(()=>{
        newState();
      },1000);
      return () => clearInterval(intervalAge);
      });

  return (
    <div>
      <h2>Hora Actual: {state.fecha.toLocaleTimeString()}</h2>
      <h3>{state.nombre} {state.apellidos}</h3>
      <h1>Edad: {state.edad}</h1>
    </div>
  )
}
