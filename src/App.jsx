import React, { useState } from 'react';
import { mascotas } from './data/mascotas';
import ListaMascotas from './components/ListaMascotas';
import FiltroEspecie from './components/FiltroEspecie';

export default function App() {
  const [filtroEspecie, setFiltroEspecie] = useState('Todas');
  const [busqueda, setBusqueda] = useState('');

  const handleBusquedaChange = (e) => {
    const valorEntrada = e.target.value;
    if (valorEntrada.length <= 30) {
      setBusqueda(valorEntrada);
    }
  };

  const mascotasFiltradas = mascotas.filter((mascota) => {
    const coincideEspecie = filtroEspecie === 'Todas' || mascota.especie === filtroEspecie;
    const busquedaLimpia = busqueda.trim().toLowerCase();
    const coincideNombre = mascota.nombre.toLowerCase().includes(busquedaLimpia);
    return coincideEspecie && coincideNombre;
  });

  const totalUrgentes = mascotasFiltradas.filter(m => m.adopcionUrgente).length;

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      <header>
        <h1>🐾 Directorio Digital AdoptaPet</h1>
      </header>

      <section style={{ backgroundColor: '#f5f5f5', padding: '15px', borderRadius: '8px' }}>
        <input
          type="text"
          value={busqueda}
          onChange={handleBusquedaChange}
          placeholder="Buscar mascota por nombre..."
          style={{ padding: '8px', width: '100%', maxWidth: '300px', marginBottom: '10px' }}
        />

        <FiltroEspecie filtroActual={filtroEspecie} setFiltroActual={setFiltroEspecie} />
        
        <div style={{ marginTop: '10px', fontWeight: 'bold' }}>
          Mascotas urgentes: {totalUrgentes}
        </div>
      </section>

      <main>
        {mascotasFiltradas.length > 0 ? (
          <ListaMascotas mascotasFiltradas={mascotasFiltradas} />
        ) : (
          <p style={{ color: 'red', fontWeight: 'bold', marginTop: '20px' }}>
            No hay mascotas que coincidan
          </p>
        )}
      </main>
    </div>
  );
}