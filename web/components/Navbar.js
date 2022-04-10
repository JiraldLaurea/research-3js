import { useState, useEffect } from "react";
import NavbarItem from "./NavbarItem";
import {
    faHouse,
    faChartSimple,
    faPieChart,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
    return (
        <div className="hidden bg-[#111827] text-[#D1D5DB] w-64 h-screen top-0 py-4 overflow-y-auto sticky sm:block">
            <div className="flex px-6 items-center mb-10">
                <div className="w-10 h-10 bg-[#636F80]" />
                <p className="ml-2  font-medium">Solid Waste MS</p>
            </div>
            <p className="text-[#636F80] font-medium text-sm ml-6 mb-2">
                GENERAL
            </p>
            <NavbarItem iconName={faHouse} pageName="" text="Dashboard" />
            <NavbarItem
                iconName={faChartSimple}
                pageName="page1"
                text="Page1"
            />
            <NavbarItem iconName={faPieChart} pageName="page2" text="Page2" />
        </div>
    );
}

export default Navbar;
