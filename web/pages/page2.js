import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

function page2() {
    return (
        <div className="min-h-screen h-full">
            <div className="flex h-full">
                <Navbar />
                <div className="flex flex-col flex-grow">
                    <Header />
                    <div className="">
                        <p>Page2</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default page2;
