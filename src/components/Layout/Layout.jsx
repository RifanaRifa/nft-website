import React from 'react'
import Routers from "../../routes/Routers";  //..........
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


const Layout = () => {
    return (
        <>
            <Header />
            <div>
                <Routers />
            </div>

            <Footer />
        </>
    )
}

export default Layout

//react router dom - browser router
//bootstrap install
//remixicon install
//googlefont - robot intall
//reactstrap install (reactstrap search - home installistion page la click panna bootstrap css import varum)
//layout ah app.js (parent la poi input pannatha output varum)