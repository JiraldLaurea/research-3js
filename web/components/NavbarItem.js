import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";

function NavbarItem({ iconName, pageName, text }) {
    const router = useRouter();

    return (
        <div
            onClick={() => {
                router.push(`/${pageName}`);
            }}
            className="h-12 flex cursor-pointer items-center hover:bg-[#242A38] transition-colors"
        >
            <FontAwesomeIcon icon={iconName} className="ml-6 mr-2 w-5" />
            <p className="text-sm font-medium">{text}</p>
        </div>
    );
}

export default NavbarItem;
