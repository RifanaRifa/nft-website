import React, { useState } from 'react'
import CommonSection from '../components/UI/common-section/CommonSection'
import { Container, Row, Col } from 'reactstrap';
import NftCard from "../components/UI/NFT-Card/NftCard";
import { NFT__DATA } from "../assets/data/data";
import "../styles/market.css";


const Market = () => {

    const [data, setData] = useState(NFT__DATA);

    const handleCategory = () => {

    }
    const handleItems = () => {

    }
    // ======== sorting data by high,mid,low rate======//
    const handleSort = (e) => {

        const filterValue = e.target.value;
        if (filterValue === "high") {
            const filterData = NFT__DATA.filter((item) => item.currentBid > 6);
            setData(filterData);
        }

        if (filterValue === "mid") {
            const filterData = NFT__DATA.filter((item) => item.currentBid > 5.50 && item.currentBid < 6);
            setData(filterData);
        }

        if (filterValue === 'low') {
            const filterData = NFT__DATA.filter((item) => item.currentBid > 4.89 && item.currentBid < 5.50);
            setData(filterData);
        }



    }
    return (
        <>
            <CommonSection title={"MarketPlace"} />

            <section>
                <Container>
                    <Row>
                        <Col lg="12" className='mb-5'>
                            <div className="market_product-filter d-flex align-items-center justify-content-between">
                                <div className="filter_left d-flex align-items-center gap-5">
                                    <div className="all_category-filter">

                                        <select onChange={handleCategory}>
                                            <option>All Categories</option>
                                            <option value="art">Art</option>
                                            <option value="music">Music </option>
                                            <option value="domain-name"> Domain Name</option>
                                            <option value=" virtual-world"> Virtual World </option>
                                            <option value=" trending-card"> Trending Cards</option>
                                        </select>
                                    </div>

                                    <div className="all_items-filter">
                                        <select onChange={handleItems}>
                                            <option>All Items</option>
                                            <option value="single-item">Single Item</option>
                                            <option value="bundle">Bundle </option>
                                        </select>
                                    </div>
                                </div>



                                <div className="filter_right">

                                    <select onChange={handleSort}>
                                        <option>Sort By</option>
                                        <option value="high">High Rate</option>
                                        <option value="mid">Mid Rate </option>
                                        <option value="low">Low Rate </option>
                                    </select>


                                </div>
                            </div>

                        </Col>

                        {
                            // NFT__DATA.map((item) => (
                            data.map((item) => (
                                <Col lg="3" md="4" sm="6" className='mb-4' key={item.id}>
                                    <NftCard item={item} />

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