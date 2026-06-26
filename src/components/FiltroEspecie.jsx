import React from 'react';
import PropTypes from 'prop-types';

export default function FiltroEspecie({ filtroActual, setFiltroActual }) {
  const especies = ['Todas', 'Perro', 'Gato', 'Otro'];

  return (
    <div style={{ display: 'flex', gap: '10px', margin: '15px 0' }}>
      {especies.map((esp) => (
        <button
          key={esp}
          onClick={() => setFiltroActual(esp)}
          style={{
            padding: '8px 16px',
            borderRadius: '20px',
            border: '1px solid #ccc',
            cursor: 'pointer',
            backgroundColor: filtroActual === esp ? '#2e7d32' : '#ffffff',
            color: filtroActual === esp ? '#ffffff' : '#000000',
            fontWeight: 'bold'
          }}
        >
          {esp}
        </button>
      ))}
    </div>
  );
}

FiltroEspecie.propTypes = {
  filtroActual: PropTypes.string.isRequired,
  setFiltroActual: PropTypes.func.isRequired
};