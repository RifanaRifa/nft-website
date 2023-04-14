// import React from 'react'
// import { Container, Row, Col } from "reactstrap";
// import "./createbox.css";


// const step_content = [
//     {
//         title: "Stetup your wallet",
//         desc: " Other hand we denoce ighteous and tion and dso beguilde ralized.",
//         icon: "ri-wallet-line"
//     },

//     {
//         title: "Create your collection",
//         desc: " Other hand we denoce ighteous and tion and dso beguilde ralized.",
//         icon: "ri-layout-masonry-line"
//     },

//     {
//         title: "Add your NFTs",
//         desc: " Other hand we denoce ighteous and tion and dso beguilde ralized.",
//         icon: "ri-image-line"
//     },

//     {
//         title: "List them for sale",
//         desc: " Other hand we denoce ighteous and tion and dso beguilde ralized.",
//         icon: "ri-list-check"
//     },

// ];

// const CreateBox = () => {
//     return (
//         <Container>
//             <Row>
//                 <Col lg="12" className='mb-4'>
//                     <div className='create-heading d-flex align-items-center justify-content-center mb-10 mt-4'>
//                         <h3>Create & Sell Your NFTs</h3>
//                     </div>
//                 </Col>

//                 {
//                     step_content.map((item, index) => (
//                         <Col lg="3" md="4" sm="6" key={index} className="mb-4">
//                             <div className='single-content'>
//                                 <span><i class={item.icon}></i></span>
//                                 <h5>
//                                     {item.title}
//                                 </h5>
//                                 <p className='mb-0'>
//                                     {item.desc}
//                                 </p>
//                             </div>

//                         </Col>
//                     ))
//                 }
//             </Row>
//         </Container>
//     )
// }

// export default CreateBox;