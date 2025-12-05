import React, { useState } from 'react';
import '/src/styles/App.css';

export function BotonAlerta({texto, color, alerta}) {
    const estilo = {
        backgroundColor: color,
        color: 'yellow',
        padding: '10px 20px',
        margin: '10px',
    }
  return (
    <>
      <button id="btn0" style={estilo} onClick={() => alert(`Este es un mensaje ${JSON.stringify({alerta})}` )} > {texto} </button>
    </>
  );
};

export function BotonEstandar({texto, color}) {
    const estilo = {
        backgroundColor: color,
        color: 'yellow',
        padding: '10px 20px',
        margin: '10px',
    }
  return (
    <>
      <button id="btn1" style={estilo} > {texto} </button>
    </>
  );
};
export function BotonColor({texto}) {
    const [color, setColor] = useState('blue'); // Color inicial

    const cambiarColor = () => {
    // Alterna entre azul y rojo
      setColor(color === 'blue' ? 'red' : 'blue');
    };

    const estilo = {
      backgroundColor: color,
      color: 'yellow',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px'
    };
  return (
    <button id="btn1" style={estilo} onClick={cambiarColor}>
      {texto}
    </button>
  );
}
