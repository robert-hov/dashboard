import React from "react";
import {NavItem, Link, NavList} from "./NavStyles";

const Nav = () => {
    return (
        <NavList>
            <NavItem>
                <Link to="/login">
                    Users
                </Link>
            </NavItem>
        </NavList>
    )
}

export default Nav