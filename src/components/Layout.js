import React from "react";

const Layout = ({header, children, footer})=>{

    return(
        <div>
            <header><h1>{header}</h1></header>
            <p>{children}</p>
            <footer>&#169; {footer}</footer>
        </div>
    )
}

export default Layout;