import { Layout } from "antd";
import Footer from "../Footer/Footer";
import GameCarousel from "../GameCarousel/GameCarousel";
import Navbar from "../Navbar/Navbar";
import { Content, Header } from "antd/es/layout/layout";

const Homepage = () => {
    return (
        <Layout>
      <Header style={{ padding: 0 }}>
        <Navbar />
      </Header>
      <Content style={{ padding: '0 50px', marginTop: '16px' }}>
        <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
          <h1>Bienvenido a Gaming Extreme</h1>
          <GameCarousel />
          <section style={{ marginTop: '2rem' }}>
            <h2>Información Relevante</h2>
            <p>Aquí encontrarás las últimas novedades y ofertas en juegos.</p>
          </section>
        </div>
      </Content>
      <Footer />
    </Layout>
       
    )
}

export default Homepage;