import React from "react";

const TabPanel = ({ isActive, children }) => {
    return isActive ? <div className="flex w-full">{children}</div> : null;
};

export default TabPanel;
