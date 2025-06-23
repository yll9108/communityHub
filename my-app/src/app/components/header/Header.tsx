import React from "react";
import Logo from "./Logo";
import NavBar from "./NavBar";
import Divider from "../shared/Divider";
import Button from "./Button";

function Header() {
    return (
        <header className="navbar bg-base-100 shadow-sm">
            <Logo />
            <NavBar />
            <Button />
            <Divider />
        </header>
    );
}

export default Header;
