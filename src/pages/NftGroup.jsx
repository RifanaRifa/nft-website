// import React from 'react'
// import CommonSection from '../components/UI/common-section/CommonSection'
// import { useParams } from 'react-router-dom';
// import { Container, Row, Col } from 'reactstrap';
// import { FRAME_DATA } from '../assets/data/data';
// import LiveAuction from '../components/UI/live-auction/LiveAuction';
// import { Link } from 'react-router-dom';

// const NftGroup = () => {

//     const { id } = useParams()
//     const groupNft = FRAME_DATA.find(item => item.id === id)
//     return (
//         <>
//             <CommonSection title={groupNft.title} />

//             <section>
//                 <Container>
//                     <Row>
//                         <Col lg="6" md="6" sm="6">
//                             <img src={groupNft.imgUrl} alt=" " className='w-100 single_nft-img' />
//                         </Col>

//                         <Col lg="6" md="6" sm="6">
//                             <div className="single_nft_content">
//                                 <h2>{groupNft.title}</h2>

//                                 <div className='d-flex align-items-center justify-content-between mt-4 mb-4'>
//                                     <div className='d-flex align-items-center gap-4 single_nft-seen'>
//                                         <span><i class="ri-eye-line"></i>234</span>
//                                         <span><i class="ri-heart-line"></i>123</span>
//                                     </div>

//                                     <div className='d-flex align-items-center gap-2 single_nft-more'>
//                                         <span><i class="ri-send-plane-line"></i></span>
//                                         <span><i class="ri-more-2-line"></i></span>
//                                     </div>
//                                 </div>


//                                 <div className="nft_creator d-flex align-items-center gap-3">
//                                     <div className="creator_img">
//                                         <img src={groupNft.creatorImg} alt="" className='w-100' />
//                                     </div>
//                                     <div className="creator_detail">
//                                         <p>Created By</p>
//                                         <h6>{groupNft.creator}</h6>
//                                     </div>
//                                 </div>

//                                 <p className='my-4'>{groupNft.desc}</p>
//                                 <button className='singleNft-btn d-flex align-items-center gap-2 w-100'>
//                                     <i class="ri-shopping-bag-line"></i>
//                                     <Link to="/wallet">Place a Bid</Link></button>

//                             </div>
//                         </Col>
//                     </Row>
//                 </Container>


//             </section>
//             <LiveAuction />
//         </>
//     )
// }

// export default NftGroup