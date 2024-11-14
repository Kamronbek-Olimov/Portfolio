import { useState } from 'react';
import '/css/Navbar.css';
import { Link } from "react-router-dom";
function Navbar({ menu, setMenu }) {
    const [links] = useState(['home', 'about', 'services', 'projects', 'contact']);
    const [activeLink, setActiveLink] = useState('home');
    return (
        <nav>
            <div className={menu ? 'menu active' : 'menu'}>
                <button className='menu-btn' onClick={() => setMenu(!menu)}>
                    <i className="fa-solid fa-xmark"></i>
                </button>
                <ul className="link">
                    {
                        links.map((item, i) => {
                            return (
                                <li key={i}>
                                    <a
                                        href={`#${item}`}
                                        className={activeLink == item ? 'active' : ''}
                                        onClick={() => {
                                            setActiveLink(item)
                                            setMenu(!menu)
                                        }}>
                                        {item.slice(0, 1).toUpperCase() + item.slice(1)}
                                    </a>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
            <div className="container">
                <a href='#home'><img src="/logo.webp" loading='lazy' alt="logo" /></a>
                <div className="nav-link">
                    <ul className="links">
                        {
                            links.map((item, i) => {
                                return (
                                    <li key={i}>
                                        <a
                                            href={`#${item}`}
                                            className={activeLink == item ? 'active' : ''}
                                            onClick={() => setActiveLink(item)}>
                                            {item.slice(0, 1).toUpperCase() + item.slice(1)}
                                        </a>
                                    </li>
                                );
                            })
                        }
                    </ul>
                    <button className='my-contact' onClick={() => window.location.href = `tel:+998911446004`}>Contact me</button>
                    <button onClick={() => setMenu(!menu)} className='menu-bar'><i className="fa-solid fa-bars-staggered"></i></button>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;