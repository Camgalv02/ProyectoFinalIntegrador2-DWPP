
// InicioSection.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'; // Importa el ícono correcto e instalarlo con npm


const InicioSection = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleToggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleLinkClick = () => {
    setMenuVisible(false);
  };

  return (
<InicioContainer id="inicio"> 
      <InicioContent>
        <InicioHeader>
          <NavBar onClick={handleToggleMenu}>
            {/* Utiliza el ícono correctamente */}
            {/*  <FontAwesomeIcon icon={['fas', 'bars']} /> */}
            <FontAwesomeIcon icon={faBars} />
          </NavBar>
          <NavMenu visible={menuVisible}>
            <NavLinks>
              <a href="#inicio" onClick={handleLinkClick}>Inicio</a>
              <a href="#experiencia" onClick={handleLinkClick}>Experiencia Profesional</a>
              <a href="#educacion" onClick={handleLinkClick}>Educación</a>
              <a href="#cursos" onClick={handleLinkClick}>Cursos</a>
              <a href="#habilidades" onClick={handleLinkClick}>Habilidades</a>
              <a href="#contacto" onClick={handleLinkClick}>Contacto</a>
            </NavLinks>
          </NavMenu>
          <Logo>
            C<span className="color">G</span>
          </Logo>
        </InicioHeader>

        <Info>
          <h1>Camila Galvez</h1>
          <h2>Desarrolladora Web Front-End Jr.</h2>
          <p>Tengo 21 años, amante de la música, la lectura, el ajedrez, los deportes y, sobre todo, la programación.</p>
        </Info>
      </InicioContent>
    </InicioContainer>
  );
};

const InicioContainer = styled.section`
  background: linear-gradient(to bottom, #082d0f, #304d30, #86a789);
  color: #fff;
  background-size: cover;
  background-position: center;

`;

const InicioContent = styled.div`
  max-width: 1000px;
  margin: auto;
  text-align: center;
  padding: 0 10px;
`;

const InicioHeader = styled.header`
  padding: 30px;
`;

const NavMenu = styled.nav`
  position: fixed;
  margin-left: 60px;
  background-color: #4F6F52;
  padding: 15px;
  border-radius: 10px;
  text-align: left;
  z-index: 99;
  display: ${({ visible }) => (visible ? 'block' : 'none')};
`;

const NavLinks = styled.div`
  a {
    display: block;
    color: #fff;
    text-decoration: none;
    margin-bottom: 10px;
    font-weight: bold;
  }
`;

const Logo = styled.div`
  font-weight: bold;
  font-size: 2.5rem;
  font-family: 'Yellowtail', cursive;
  text-shadow: 0 0 35px #fff;

  .color {
    color: #7A9D54;
    font-family: 'Yellowtail', cursive;
  }
`;

const NavBar = styled.div`
  position: fixed;
  background-color: #4F6F52;
  font-size: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  line-height: 50px;
  cursor: pointer;
  transition: .3s;

  &:hover {
    box-shadow: 0 0 35px #fff;
  }
`;

const Info = styled.div`
  padding-bottom: 130px;

  h1 {
    font-size: 3rem;
    letter-spacing: 5px;
  }

  h2 {
    font-weight: normal;
    font-size: 20px;
    margin-top: -10px;
    letter-spacing: 2px;
  }
`;

export default InicioSection;

