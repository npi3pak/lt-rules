import React from "react";

const TabPanel = ({ isActive, children }) => {
    return isActive ? <div className="content">{children}</div> : null;
};

export default TabPanel;
