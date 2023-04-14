import React from 'react'
import { Container, Row, Col } from "reactstrap";
import CommonSection from '../components/UI/common-section/CommonSection';
import "../styles/wallet.css";

const wallet__data = [
    {
        title: "Bitcoin",
        desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit.  beatae soluta ipsum incidunt.  repudiandae tempore rerum iusto voluptatem repudiandae",
        icon: "ri-bit-coin-line",
    },
    {
        title: "Coinbase",
        desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit.  beatae soluta ipsum incidunt.  repudiandae tempore rerum iusto voluptatem repudiandae",
        icon: "ri-coin-line",
    },
    {
        title: "Metamask",
        desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit.  beatae soluta ipsum incidunt.  repudiandae tempore rerum iusto voluptatem repudiandae",
        icon: "ri-money-cny-circle-line",
    },
    {
        title: "Authereum",
        desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. beatae soluta ipsum incidunt.  repudiandae tempore rerum iusto voluptatem repudiandae",
        icon: "ri-bit-coin-line",
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
                                        <span><i class={item.icon}></i></span>
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