import React, { useState } from 'react'
import CommonSection from '../components/UI/common-section/CommonSection'
import { Container, Row, Col } from 'reactstrap';
import NftCard from "../components/UI/NFT-Card/NftCard";
import { NFT_DATA } from "../assets/data/data";
import "../styles/market.css";


const Market = () => {
    const [artWork, setArtWork] = useState(NFT_DATA);


    const allClick = () => {
        const Condition = NFT_DATA.map((item) => item)
        setArtWork(Condition);
    }

    const artClick = () => {
        const Condition = NFT_DATA.filter((item) => item.category === "Art");
        setArtWork(Condition);
    }

    const cardClick = () => {
        const Condition = NFT_DATA.filter((item) => item.category === "Card");
        setArtWork(Condition);
    }

    const collectionClick = () => {
        const Condition = NFT_DATA.filter((item) => item.category === "Collectibles");
        setArtWork(Condition);
    }

    const photoClick = () => {
        const Condition = NFT_DATA.filter((item) => item.category === "photo");
        setArtWork(Condition);
    }
    return (
        <>
            <CommonSection title={"MarketPlace"} />

            <section>
                <Container>
                    <Row>

                        <Col lg='12' className='mb-5'>
                            <div className='explore_product mb-5'>
                                <h5 className=' explore_head d-flex align-items-center justify-content-center'>Explore Product</h5>
                            </div>
                            <div className='explore text-center justify-content-center'>
                                <button onClick={allClick} className='mx-3 actives'>All</button>
                                <button onClick={artClick} className='mx-3 actives'>Art</button>
                                <button onClick={cardClick} className=' mx-3 actives'>Card</button>
                                <button onClick={collectionClick} className='mx-3 actives'>Collectibles</button>
                                <button onClick={photoClick} className='mx-3 actives'>Photo</button>

                            </div>
                        </Col>

                        {
                            artWork.map((items) => (

                                <Col lg="3" md="4" sm="6" className='mb-4'>
                                    <NftCard key={items.id} item={items} />
                                </Col>
                            ))
                        }
                    </Row>
                </Container>
            </section>
        </>
    );
};


export default Market;