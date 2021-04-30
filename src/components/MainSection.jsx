import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import TableComp from "./TableComp";
let MainSection = () => {
  return (
    <TableComp />
    /*<Tabs
      className="my-2"
      variant="pills"
      defaultActiveKey="home"
      transition={false}
      id="noanim-tab-example"
    >
      <Tab eventKey="home" title="User Guided ForeCast">
        <TableComp />
      </Tab>
      <Tab eventKey="profile" title="Accuracy and Rootcause">
        Hello Alok
      </Tab>
    </Tabs>*/
  );
};

export default MainSection;
