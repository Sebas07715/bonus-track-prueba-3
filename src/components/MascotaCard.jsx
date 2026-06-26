import React from 'react';
import PropTypes from 'prop-types';

export default function MascotaCard({ nombre, raza, edad, especie, descripcion, caracteristicas, adopcionUrgente }) {
  const getEspecieStyles = (esp) => {
    switch (esp) {
      case 'Perro': return { backgroundColor: '#e3f2fd', color: '#0d47a1', borderLeft: '5px solid #0d47a1' };
      case 'Gato': return { backgroundColor: '#f3e5f5', color: '#4a148c', borderLeft: '5px solid #4a148c' };
      default: return { backgroundColor: '#e8f5e9', color: '#1b5e20', borderLeft: '5px solid #1b5e20' };
    }
  };
  const cardStyle = {
    ...getEspecieStyles(especie),
    padding: '16px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  };
  const urgentBadgeStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    backgroundColor: '#d32f2f',
    color: '#ffffff',
    padding: '4px 8px',
    borderRadius: '4px',
    fontSize: '0.75rem',
    fontWeight: 'bold'
  };

  return (
    <div style={cardStyle}>
      {adopcionUrgente && <span style={urgentBadgeStyle}>🚨 URGENTE</span>}
      
      <h3 style={{ margin: '0 0 4px 0' }}>{nombre}</h3> [cite: 96]
      <p style={{ margin: 0, fontSize: '0.9rem' }}><strong>Raza:</strong> {raza}</p>
      <p style={{ margin: 0, fontSize: '0.9rem' }}><strong>Edad:</strong> {edad} años</p>
      <p style={{ margin: 0, fontSize: '0.9rem' }}><strong>Especie:</strong> {especie}</p>
      <p style={{ margin: '8px 0', fontSize: '0.95rem', fontStyle: 'italic' }}>"{descripcion}"</p>
      
      <div>
        <strong style={{ fontSize: '0.85rem' }}>Características:</strong>
        <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', marginTop: '4px' }}>
          {caracteristicas.map((char, index) => (
            <span key={index} style={{ backgroundColor: 'rgba(0,0,0,0.05)', padding: '2px 6px', borderRadius: '4px', fontSize: '0.8rem' }}>
              {char}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

MascotaCard.propTypes = {
  nombre: PropTypes.string.isRequired,
  raza: PropTypes.string.isRequired,
  edad: PropTypes.number.isRequired,
  especie: PropTypes.oneOf(['Perro', 'Gato', 'Otro']).isRequired,
  descripcion: PropTypes.string,
  caracteristicas: PropTypes.arrayOf(PropTypes.string),
  adopcionUrgente: PropTypes.bool
};

MascotaCard.defaultProps = {
  descripcion: "Sin descripción disponible.",
  caracteristicas: [],
  adopcionUrgente: false
};