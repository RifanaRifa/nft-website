import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import "./step-section.css";

const STEP_DATA = [
    {
        title: "Stetup your wallet",
        desc: " Wallet that is functional for NFT purchasing. You may have a Coinbase account at this point, but very few are actually set up to buy an NFT.",
        icon: "ri-wallet-line"
    },

    {
        title: "Create your collection",
        desc: "Setting up your NFT collection and creating NFTs on NFTs is easy! This guide explains how to set up your first collection",
        icon: "ri-layout-masonry-line"
    },

    {
        title: "Add your NFTs",
        desc: " Sed ut perspiciatis un de omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem..",
        icon: "ri-image-line"
    },

    {
        title: "List them for sale",
        desc: " Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs!!.",
        icon: "ri-list-check"
    },

];

const StepSection = () => {
    return (
        <section>
            <Container>
                <Row>
                    <Col lg="12" className='mb-4'>
                        <h3 className='step_title'> Create and sell your NFTs</h3>
                    </Col>

                    {
                        STEP_DATA.map((item, index) => (
                            <Col lg="3" md="4" sm="6" key={index} className="mb-4">
                                <div className='single_step_item'>
                                    <span><i class={item.icon}></i></span>
                                    <div className='step_item_content'>
                                        <h5>
                                            <Link to="/wallet">{item.title}</Link>
                                        </h5>
                                        <p className='mb-0'>
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </Col>

                        ))
                    }




                </Row>
            </Container>
        </section>
    )
}

export default StepSection