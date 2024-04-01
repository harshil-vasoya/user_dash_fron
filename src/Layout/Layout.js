import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { useState } from "react";
import Profile from "../Pages/main";
import Footer from "../components/Footer";

function Layout() {

    return (
        <>
            <Header  />
            <div className="flex flex-col md:flex-row items-center h-[86vh] w-full md:overflow-y-hidden">
            <div className=" h-[86vh] w-[80vw] overflow-y-auto">
                <Outlet />
            </div>
            <div className="hidden md:flex h-[86vh]  bg-[#1E212A]">
        <Profile/>
      </div>

            </div>
            <Footer/>



        </>
    )
}
export default Layout;