import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { NFT__DATA } from '../../../assets/data/data'
import NftCard from '../NFT-Card/NftCard';
import "./trending.css";

const Trending = () => {
    return (
        <section>
            <Container>
                <Row>
                    <Col lg="12">
                        <h3 className='trending_title mb-5'>Trending Collection </h3>
                    </Col>

                    {
                        NFT__DATA.slice(4, 12).map((item) => (
                            <Col lg="3" md="4" sm="6" key={item.id} className="mb-4">
                                <NftCard item={item} />
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </section>
    )
}

export default Trending