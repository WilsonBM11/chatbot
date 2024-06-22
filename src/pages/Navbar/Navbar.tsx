
import { Button, Input, Menu } from "antd";
import "./Navbar.css";
import { SearchOutlined } from "@ant-design/icons";
import logo from "../../assets/logo.png";
const { Search } = Input;

const Navbar = () => {
    return (
        <Menu mode="horizontal" className="navbar">
            

            
            <Menu.Item className="navbar-item" key="home">Inicio</Menu.Item>
            <Menu.Item className="navbar-item" key="contact">Contacto</Menu.Item>
            <Menu.Item className="navbar-item" key="games">Juegos</Menu.Item>
            <Menu.Item key="search" className="navbar-search">
                <Search
                    placeholder="Buscar juegos"
                    enterButton={<Button icon={<SearchOutlined />} />}
                    style={{ verticalAlign: 'middle' }}
                />
            </Menu.Item>
        </Menu>
    );
}

export default Navbar;