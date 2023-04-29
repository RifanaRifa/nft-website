import React from 'react'
import { Container, Row, Col } from "reactstrap";
import CommonSection from '../components/UI/common-section/CommonSection';
import "../styles/wallet.css";
import mask from "../assets/images/wallet-4.png";
import auther from "../assets/images/wallet-2.png"
import wallet from "../assets/images/wallet-1.png";
import dapper from "../assets/images/wallet-3.png";

const wallet__data = [
    {
        title: "Bitski",
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
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.  beatae soluta ipsum incidunt.  repudiandae tempore rerum iusto voluptatem repudiandae",
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
                                <p>Add Wallet</p>
                                <h3 className='text-light'>Connect youe wallet</h3>

                            </div>
                        </Col>

                        {
                            wallet__data.map((item, index) => (
                                <Col lg="3" md="4" sm="6" key={index} className='mb-4'>
                                    <div className='wallet_item'>
                                        <img src={item.imgUrl} />
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