import { useRef, useEffect } from "react";
import "./header.css";
import { Container } from "reactstrap";
import { NavLink, Link } from 'react-router-dom';


const NAV_LINKS = [
    {
        url: "/home",
        display: "Home"
    },
    {
        url: "/market",
        display: "Market"
    },

    {
        url: "/create",
        display: "Create"
    },

    {
        url: "/contact",
        display: "Contact"
    },


];




const Header = () => {
    // scrool top header la navigation athuku use ref use effect code

    const headerRef = useRef(null)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('header_shrink')
            }
            else {
                headerRef.current.classList.remove('header_shrink')
            }
        })
        return () => {
            // window.removeEventListener('scroll');
        }

    }, []);

    const menuRef = useRef(null);

    const toggleMenu = () => menuRef.current.classList.toggle("active_menu")


    return (

        <header className='header' ref={headerRef}>
            <Container>
                <div className='navigation' >
                    <div className='logo'>
                        <h2 className='d-flex gap-2 align-items-center'> <span><i class="ri-fire-fill"></i></span>NEFTRON</h2>
                    </div>


                    <div className='nav_menu' ref={menuRef} onClick={toggleMenu}>
                        <ul className="nav_list">
                            {
                                NAV_LINKS.map((item, index) => (
                                    <li className='nav_item' key={index}>
                                        <NavLink to={item.url} className={navClass => navClass.isActive ? "active" : ''}> {item.display} </NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>


                    <div className="nav_right d-flex align-items-center gap-5">
                        <button className='btn d-flex gap-2 align-items-center'>
                            <span><i class="ri-wallet-line"></i></span>

                            <Link to="/wallet">Connect Wallet</Link>

                        </button>

                        <span className='mobile_menu'>
                            <i class="ri-menu-line" onClick={toggleMenu}></i>
                        </span>
                    </div>
                </div>
            </Container>
        </header >
    );
};

export default Header;