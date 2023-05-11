import React from 'react'
import "./seller.css";
import { Container, Row, Col } from 'reactstrap';

import { SELLER_DATA } from '../../../assets/data/data';

const SellerSection = () => {
    return (
        <section>
            <Container>
                <Row>
                    <Col lg="12" className='mb-5'>
                        <div className='seller_section-title'>
                            <h3>Top Seller</h3>
                        </div>
                    </Col>

                    {
                        SELLER_DATA.map((item) => (
                            <Col lg="2" md="3" sm="4" xs="6" key={item.id} className="mb-4">
                                <div className='single_seller-card d-flex align-items-center gap-3'>
                                    <div className='seller_img'>
                                        <img src={item.sellerImg} alt='' className='w-100' />
                                        {/* className='w-100'ithu kantipa podanum apotha kuttiya varum css taluthanum */}
                                    </div>

                                    <div className='seller_content'>
                                        <h6>{item.sellerName}</h6>
                                        <h6>{item.currentBid} ETH</h6>
                                    </div>

                                </div>

                            </Col>))
                    }


                </Row>
            </Container>
        </section>
    )
};

export default SellerSection;