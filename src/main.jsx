import React from "react";
import { ReactDOM } from "react";
import Footer from "./features/home/components/footer/footer";
import Navbar from "./features/home/components/navbar/navbar";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Navbar></Navbar>
        <Footer></Footer>
    </React.StrictMode>
)