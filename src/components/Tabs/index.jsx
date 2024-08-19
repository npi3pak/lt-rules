import React, { useState } from "react";
import Tab from "./Tab";
import TabPanel from "./TabPanel";

export const POSITION = {
  TOP: "top",
  BOTTOM: "botton",
};

const Tabs = ({ children, navPosition = POSITION.TOP }) => {
  const [activeTab, setActiveTab] = useState(0);

  const renderNavTabs = () => (
    <nav
      className="flex gap-6 flex-wrap flex-row justify-center"
      aria-label="Tabs"
    >
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
  );

  return (
    <>
      {navPosition === POSITION.TOP && renderNavTabs()}
      {React.Children.map(children, (child, index) => (
        <TabPanel isActive={activeTab === index}>
          {child.props.children}
        </TabPanel>
      ))}
      {navPosition === POSITION.BOTTOM && renderNavTabs()}
    </>
  );
};

export default Tabs;
