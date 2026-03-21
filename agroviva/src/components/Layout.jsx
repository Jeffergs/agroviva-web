import Navbar from "./Navbar";
import Footer from ".././components/Footer/Footer";

import { Outlet } from "react-router-dom"

function Layout(){
   return(
    <>
        <Navbar />
        <main>
            <Outlet />
        </main>
        <Footer />
    </>
   )
}

export default Layout;
