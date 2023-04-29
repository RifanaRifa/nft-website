import React, { useRef } from 'react'
import CommonSection from '../components/UI/common-section/CommonSection';
import { Container, Row, Col } from "reactstrap";
import conImg from "../assets/images/contact-img01.png";


const Contact = () => {
    const nameRef = useRef('')
    const emailRef = useRef('')
    const subjectRef = useRef('')
    const messageRef = useRef('')

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return <>
        <CommonSection title="Contact Us" />
        <section className='contact_section'>
            <Container>
                <Row>

                    <Col lg="6" md="12">
                        <div className='contact_img mt-5'>
                            <img src={conImg} alt="" />

                        </div>
                    </Col>


                    <Col lg="6" md="12" className='m-auto text-center'>
                        {/* <h2>Drop a Message</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis dignissimos ex ipsa voluptas quos necessitatibus aliquid
                            repellendus deleniti reiciendis blanditiis sit sunt nisi omnis nemo, molestiae recusandae asperiores a illum!</p> */}
                        <div className='contact'>

                            <form onSubmit={handleSubmit}>
                                <div className="form_input">
                                    <input type="text" placeholder='Enter your name' ref={nameRef} />
                                </div>

                                <div className="form_input">
                                    <input type="email" placeholder='Enter your email' ref={emailRef} />
                                </div>

                                <div className="form_input">
                                    <input type="email" placeholder='Enter your Phone Number' ref={emailRef} />
                                </div>

                                <div className="form_input">
                                    <input type="text" placeholder='Enter subject' ref={subjectRef} />
                                </div>

                                <div className="form_input">
                                    <textarea rows="7" placeholder='Write message' ref={messageRef} ></textarea>
                                </div>

                                <button className='send_btn' style={{ border: 'none', padding: '7px 25px', borderRadius: '5px', marginTop: '20px' }}>
                                    send a message</button>
                            </form>
                        </div>

                    </Col>
                </Row>
            </Container>
        </section>


    </>
}

export default Contact