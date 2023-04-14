import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import "./hero-section.css";

import heroImg from "../../assets/images/hero-0.jpg";
const HeroSection = () => {
    return (
        <section className='hero_section'>
            <Container>
                <Row>
                    <Col lg="6" md="6">
                        <div className='hero_content'>
                            <h2>Discover rare digital art and collect<span>sell extraordinary</span> NFTs </h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident praesentium incidunt maiores
                                ducimus quis veniam voluptate eos.</p>

                            <div className='hero_btns d-flex align-items-center gap-4'>
                                <button className='explore_btn d-flex align-items-center gap-2'>
                                    <i class="ri-rocket-line"></i><Link to="/market">Explore</Link></button>
                                <button className='create_btn d-flex align-items-center gap-2'>
                                    <i class="ri-ball-pen-line"></i><Link to="/create">Create</Link></button>
                            </div>
                        </div>
                    </Col>

                    <Col lg="6" md="6">
                        <div className='hero_img'>
                            <img src={heroImg} alt="" className='w-100' />

                        </div>
                    </Col>


                </Row>
            </Container>
        </section>
    )
}

export default HeroSection