import React, { useState } from "react";
import Tab from "./Tab";
import TabPanel from "./TabPanel";

const Tabs = ({ children }) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <>
            <nav className="flex gap-6 flex-wrap flex-row justify-center" aria-label="Tabs">
                {React.Children.map(children, (child, index) => (
                    <a
                        key={`tab-${index}`}
                        href="#"
                        className="shrink-0 rounded-lg p-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                        aria-current={activeTab === index ? "page" : "none"}
                        onClick={() => setActiveTab(index)}
                    >
                        {child.props.title}
                    </a>
                ))}
            </nav>
            {React.Children.map(children, (child, index) => (
                <TabPanel isActive={activeTab === index}>
                    {child.props.children}
                </TabPanel>
            ))}
        </>
    );
};

export default Tabs;
