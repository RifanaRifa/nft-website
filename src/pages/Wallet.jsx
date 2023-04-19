import React from 'react'
import { Container, Row, Col } from "reactstrap";
import CommonSection from '../components/UI/common-section/CommonSection';
import "../styles/wallet.css";
import mask from "../assets/images/auction_4.jpg";
import auther from "../assets/images/download (1).png";
import wallet from "../assets/images/download (2).png";
import dapper from "../assets/images/download (3).png";

const wallet__data = [
    {
        title: "Bitcoin",
        desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit.  beatae soluta ipsum incidunt.  repudiandae tempore rerum iusto voluptatem repudiandae",
        imgUrl: mask,
    },
    {
        title: "Coinbase",
        desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit.  beatae soluta ipsum incidunt.  repudiandae tempore rerum iusto voluptatem repudiandae",
        imgUrl: auther,
    },
    {
        title: "Metamask",
        desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit.  beatae soluta ipsum incidunt.  repudiandae tempore rerum iusto voluptatem repudiandae",
        imgUrl: wallet,
    },
    {
        title: "Authereum",
        desc: " Purus irure lacinia eiusmod inventore bibendum habitant potenti non sint rem! Felis, asper",
        imgUrl: dapper,
    },
]

const Wallet = () => {
    return (
        <>
            <CommonSection title="Connect Wallet" />
            <section>
                <Container>
                    <Row>
                        <Col lg="12" className='mb-5 text-center'>
                            <div className='w-50 m-auto'>
                                <h3 className='text-light'>Connect youe wallet</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At tempora, similique ullam beatae soluta ipsum incidunt. Consequuntur
                                    repudiandae tempore rerum iusto voluptatem quis  </p>
                            </div>
                        </Col>

                        {
                            wallet__data.map((item, index) => (
                                <Col lg="3" md="4" sm="6" key={index} className='mb-4'>
                                    <div className='wallet_item'>
                                        {item.imgUrl}
                                        <h5>{item.title}</h5>
                                        <p>{item.desc} </p>
                                    </div>
                                </Col>
                            ))


                        }




                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Wallet