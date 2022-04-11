import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import NavbarMobile from "./NavbarMobile";
<<<<<<< HEAD
=======
import Navbar from "./navbar";
>>>>>>> 3e046533ed7771fd17eb8a5cc27bf0374729553f

function Header() {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    return (
        <div className="flex sticky top-0 h-16 border-b bg-white p-3 items-center">
            <div
                onClick={() => {
                    setIsNavbarOpen(!isNavbarOpen);
                }}
            >
                <FontAwesomeIcon
                    icon={faBars}
                    className="w-5 mr-4 sm:hidden cursor-pointer"
                />
            </div>
            <p>header</p>

            {isNavbarOpen && (
                <div>
                    <NavbarMobile />
                    <div
                        onClick={() => {
                            setIsNavbarOpen(!isNavbarOpen);
                        }}
                        className="sm:hidden fixed top-0 h-full w-full bg-[#3030307a]"
                    />
                </div>
            )}
        </div>
    );
}

export default Header;
