// App.js
import React from 'react';
import InicioSection from './components/InicioSection';
import ExperienciaSection from './components/ExperienciaSection';
import EducacionSection from './components/EducacionSection';
import CursoSection from './components/CursoSection';
import HabilidadesSection from './components/HabilidadesSection';
import styled from 'styled-components';
import ContactoSection from './components/ContactoSection';


function App() {
  return (
    <div>
      <InicioSection />
      <ExperienciaSection />
      <EducacionSection />
      <CursoSection/>
      <HabilidadesSection/>
     <ContactoSection/>
    </div>
  );
}

export default App;