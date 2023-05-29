import React from 'react'
import { Container, Col, Row, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from 'react-router-dom';
import "./footer.css"
const MY_ACCOUNT = [
    {
        display: "Author Profile",
        url: "/seller-profile"
    },
    {
        display: "Create item",
        url: "/create"
    },
    {
        display: "Collection",
        url: "/market"
    },
    {
        display: "Edit Profile",
        url: "/edit-profile"
    },

];

const RESOURCES = [
    {
        display: "Help Center",
        url: "#"
    },
    {
        display: "Partner",
        url: "#"
    },
    {
        display: "Community",
        url: "#"
    },
    {
        display: "Activity",
        url: "#"
    },

];

const COMPANY = [
    {
        display: "About",
        url: "#"
    },
    {
        display: "Career",
        url: "#"
    },
    {
        display: "Ranking",
        url: "#"
    },
    {
        display: "Contact Us",
        url: "/contact"
    },

];


const Footer = () => {
    return (
        <footer className='footer'>
            <Container>
                <Row>
                    <Col lg="3" md="6" sm="6" className='mb-4'>
                        <div className='logo'>
                            <h2 className='d-flex gap-2 align-items-center'> <span><i class="ri-fire-fill"></i></span>NEFTRON </h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, praesentium iure. Molestiae nesciunt, minus aliquam voluptatem
                                exercitationem mollitia vero.</p>
                        </div>
                    </Col>

                    <Col lg="2" md="3" sm="6" className='mb-4'>
                        <h5>My Account</h5>
                        <ListGroup className='list_group'>
                            {
                                MY_ACCOUNT.map((item, index) => (
                                    <ListGroupItem key={index} className="list_item">
                                        <Link t0={item.url}> {item.display} </Link>
                                    </ListGroupItem>
                                ))}
                        </ListGroup>
                    </Col>

                    <Col lg="2" md="3" sm="6" className='mb-4'>
                        <h5>Resources</h5>
                        <ListGroup className='list_group'>
                            {
                                RESOURCES.map((item, index) => (
                                    <ListGroupItem key={index} className='list_item'>
                                        <Link to={item.url}> {item.display}</Link>
                                    </ListGroupItem>
                                ))}
                        </ListGroup>
                    </Col>

                    <Col lg="2" md="3" sm="6" className='mb-4'>
                        <h5>Company</h5>
                        <ListGroup className='list_group'>
                            {
                                COMPANY.map((item, index) => (
                                    <ListGroupItem key={index} className='list_item'>
                                        <Link to={item.url}> {item.display}</Link>
                                    </ListGroupItem>
                                ))}
                        </ListGroup>
                    </Col>

                    <Col lg="3" md="6" sm="6" className='mb-4'>
                        <h5>Newsletter</h5>
                        <input type="text" className='newsletter' placeholder='Email' />
                        <div className='social_links d-flex gap-3 align-items-center'>
                            <span><Link to="#"><i class="ri-facebook-line"></i></Link></span>
                            <span><Link t0="#"><i class="ri-instagram-line"></i></Link></span>
                            <span><Link t0="#"><i class="ri-telegram-line"></i></Link></span>
                            <span><Link t0="#"><i class="ri-twitter-line"></i></Link></span>
                            <span><Link t0="#"><i class="ri-discord-line"></i></Link></span>

                        </div>
                    </Col>
                    <Col lg="12">
                        <p className='copyright'>
                            Copyrights 2023,Developed by Rifana. All Rights Reserved </p>
                    </Col>
                </Row>
            </Container>
        </footer>

    )
};

export default Footer;