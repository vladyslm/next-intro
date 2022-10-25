import React from "react";
import Navigation from "./Navigation";

const Layout: React.FC<any> = ({children}) => {
    return (
        <>
            <Navigation/>
            <main>{children}</main>
        </>
    )
}

export default Layout
