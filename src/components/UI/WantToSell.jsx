import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import NewsletterImg from "../../assets/images/hero.png";
import "./wantsell.css";


const WantToSell = () => {
    return (
        <section className="want_sell">
            <Container>
                <Row>
                    <Col lg="6" md="6">
                        <div className='newsletter_img'>
                            <img src={NewsletterImg} alt=" " className='w-100' />
                        </div>
                    </Col>

                    <Col lg="6" md="6">
                        <div className='newletter_input'>
                            <h5 className='want_head'>Want To Sell Your NFT?</h5>
                            <p>The other hand, we denounce with righteous indignation and dislike men who are begui
                                and demoralized by the charms of pleasure of the moment, so blinded by desire that.</p>
                            {/* <input className='Want_text' type="email" placeholder='Enter your email' /> */}
                            <input type="text" className='news-letter' placeholder='Enter Your Email' />
                        </div>
                    </Col>
                </Row>

            </Container>
        </section>

    );
};

export default WantToSell;