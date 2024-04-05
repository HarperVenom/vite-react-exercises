import Navbar from "./Navbar";
import Content from "./Content";
import { useEffect, useState } from "react";
import "./styles.css";

const Tabs = ({ tabs }) => {
  const [currentTab, setCurrentTab] = useState(
    tabs && tabs.length > 0 ? tabs[0] : null
  );

  useEffect(() => {
    console.log(currentTab);
  }, [currentTab]);

  return (
    <div className="tabs-container">
      <Navbar
        labels={tabs.map((tab) => tab.label)}
        currentTab={currentTab}
        setCurrent={setCurrentTab}
      ></Navbar>

      {tabs.map((tab, index) =>
        index === currentTab ? <Content content={tab.content}></Content> : null
      )}
    </div>
  );
};

export default Tabs;
