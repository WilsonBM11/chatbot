
import { Layout } from 'antd';
import './Footer.css';
import { Content } from 'antd/es/layout/layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer  = () => {
    return (
        <Layout className='footer'>
            <Content className='footer-content'>
                <div>
                    <h2>Contacto</h2>
                    <p>+506 11223344</p>
                    <p>contacto@gamingextreme.com</p>
                    <p>Cartago, Costa Rica</p>
                </div>

                <div>
                    <h2>Redes Sociales</h2>
                    <p><FontAwesomeIcon icon={faInstagram} /> Instagram</p>
                    <p><FontAwesomeIcon icon={faFacebook} /> Facebook</p>
                    <p><FontAwesomeIcon icon={faTwitter} /> Twitter</p>
                    <p><FontAwesomeIcon icon={faWhatsapp} /> Whatsapp</p>
                </div>

                <div>
                    <h2>Enlaces</h2>
                    <p>Política de Privacidad</p>
                    <p>Garantía y Devoluciones</p>
                    <p>Términos y condiciones</p>
                </div>
            </Content>
            <p>&copy; 2024 Gaming Extreme. Todos los derechos reservados.</p>
        </Layout>
    );
}

export default Footer;
