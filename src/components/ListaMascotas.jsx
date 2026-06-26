import React from 'react';
import PropTypes from 'prop-types';
import MascotaCard from './MascotaCard';

export default function ListaMascotas({ mascotasFiltradas }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px', marginTop: '20px' }}>
      {mascotasFiltradas.map((mascota) => (
        <MascotaCard
          key={mascota.id}
          nombre={mascota.nombre}
          raza={mascota.raza}
          edad={mascota.edad}
          especie={mascota.especie}
          descripcion={mascota.descripcion}
          caracteristicas={mascota.caracteristicas}
          adopcionUrgente={mascota.adopcionUrgente}
        />
      ))}
      
    </div>
  );
}

ListaMascotas.propTypes = {
  mascotasFiltradas: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      nombre: PropTypes.string.isRequired,
      raza: PropTypes.string.isRequired,
      edad: PropTypes.number.isRequired,
      especie: PropTypes.string.isRequired,
      descripcion: PropTypes.string,
      caracteristicas: PropTypes.arrayOf(PropTypes.string),
      adopcionUrgente: PropTypes.bool
    })
  ).isRequired
};