import React from "react";
import './index.css'

// COMPONENT



const Layout = ({ children }) => {
    return (
        <div className="layout-container">
            <div className="page-body">{children}</div>
        </div>
    );
};

export default Layout;