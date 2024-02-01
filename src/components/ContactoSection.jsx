import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faWhatsapp,
    faInstagram,
    faLinkedinIn,
    faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ContactoSection = () => {

    const ContactoContainer = styled.section`
        background-color: #202020;
        padding: 140px 0 100px 0;
        color: #e6e6e6;
        text-align: center;
   
    `;

    const ContenidoSeccion = styled.div`
    max-width: 1000px;
    margin: auto;
    padding: 0 10px;
    `;

    const Redes = styled.div`
     margin: 20px 0;
     `;

    const Red = styled.a`
        display: inline-block;
        text-decoration: none;
        background-color: #000;
        color: #079181;
        border: 1px solid #079181;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        line-height: 40px;
        margin: 0 5px;
        transition: .3s;
        &:hover{
        color: #fff;
        background-color: #079181;
        box-shadow: 0 0 20px #fff;
        }
    `;


    const Footer = styled.footer`
        margin-top: 80px;
        font-size: 12px;
    `;


    return (
        <ContactoContainer id="contacto">
            <ContenidoSeccion>
                <h2 class="titulo-seccion">Contacto</h2>

                <Redes>
                    <Red href="https://wa.me/3777660699">
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </Red>
                    <Red href="https://www.instagram.com/cam.121604">
                        <FontAwesomeIcon icon={faInstagram} />
                    </Red>
                    <Red href="https://www.linkedin.com/in/camila-galvez-/">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </Red>
                    <Red href="https://github.com/Camgalv02">
                        <FontAwesomeIcon icon={faGithub} />
                    </Red>
                    <Red href="mailto:camgalvez43@gmail.com">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </Red>
                </Redes>
            </ContenidoSeccion>

            <Footer>
                <p>
                    &copy; 2023 Desarrollado por Camila Galvez. Todos los derechos
                    reservados.
                </p>
            </Footer>
        </ContactoContainer>
    );
};

export default ContactoSection;
