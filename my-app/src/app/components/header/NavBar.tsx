import React from "react";
import { menuItems } from "../shared/menuItems";

function NavBar() {
    return (
        <>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems.map((item) => (
                        <li key={item}>
                            <a>{item}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default NavBar;
