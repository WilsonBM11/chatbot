import { Layout, Card, Row, Col } from "antd";
import Footer from "../Footer/Footer";
import GameCarousel from "../GameCarousel/GameCarousel";
import Navbar from "../Navbar/Navbar";
import { Content} from "antd/es/layout/layout";
import './Homepage.css'; // Importa el archivo CSS para los estilos
import descuentosImage from '../../assets/descuento.png';
import juegoNuevoImage from '../../assets/juegoNuevo.png';
import mejoresJuegosImage from '../../assets/mejoresJuegos.png';
const { Meta } = Card;

const Homepage = () => {
    return (
        <Layout>
            
                <Navbar />
            
            <Content className="content-body" >
                <h1 className="homepage-title">Gaming Extreme</h1>
                <div style={{ background: '#fff', padding: 10, minHeight: 380 }}>
                    <p className="homepage-slogan">"Tu mundo de aventuras digitales comienza aquí."</p>
                    <GameCarousel />
                    <Content style={{ marginTop: '2rem' }}>
                        <h2 className="homepage-noticias">Noticias</h2>
                        <Row gutter={16}>
                            <Col span={8}>
                                <Card className="card-noticia"
                                    hoverable
                                    cover={<img className="img-noticia" alt="Descuentos" src={descuentosImage} />}
                                >
                                    <Meta title="Juegos en Descuento" description="Aprovecha las mejores ofertas en tus juegos favoritos." />
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card className="card-noticia"
                                    hoverable
                                    cover={<img alt="Mejores juegos 2024" src={mejoresJuegosImage} />}
                                >
                                    <Meta title="Mejores Juegos 2024" description="Descubre los títulos más esperados del próximo año." />
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card className="card-noticia"
                                    hoverable
                                    cover={<img alt="Nuevas llegadas" src={juegoNuevoImage} />}
                                >
                                    <Meta title="Nuevas Llegadas" description="Explora los últimos lanzamientos en el mundo de los videojuegos." />
                                </Card>
                            </Col>
                        </Row>
                    </Content>
                </div>
                
            </Content>
            <Footer/>
        </Layout>
        
    )
}

export default Homepage;
