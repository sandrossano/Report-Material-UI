import React from "react";
import "./styles.css";
import Navbar from "./navbar";
import { CssBaseline } from "@material-ui/core";
import { Container, Row, Col } from "react-bootstrap";
import { Provider } from "react-redux";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import COLORS from "./constants/colors";
import Dashboard from "./app/dashboard/Dashboard";
import Navigation from "./app/navigation/Navigation";
import Header from "./app/header/Header";
import Shops from "./app/shops/Shops";
import Product from "./app/product/Product";
import Sales from "./app/sales/Sales";
import Reports from "./app/reports/Reports";
import Settings from "./app/settings/Settings";
import MainSection from "./components/MainSection";
import { store } from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import TableComp from "./components/TableComp";
import {
  faCoffee,
  faHome,
  faShoppingBasket,
  faCalendar,
  faClipboardCheck
} from "@fortawesome/free-solid-svg-icons";

library.add(faCoffee, faHome, faShoppingBasket, faCalendar, faClipboardCheck);

const Container2 = styled.div`
  background-color: ${COLORS.mainBackground};
  width: 100vw;
  min-height: 100vh;
  padding-bottom: 50px;
`;

{
  /*
export default function App() {
  return (
    <Provider store={store}>
      <div className="App ">
        <CssBaseline />
        <Navbar />
        {/* <TableComp />
         */
}
{
  /*
        <Container fluid>
          <Row>
            {/*<Col xs={1} id="sidebar-wrapper">
                 <SideBar />
               
            </Col>*/
}
{
  /*}         <Col id="page-content-wrapper">
              <MainSection />
            </Col>
          </Row>
        </Container>
      </div>
    </Provider>
  );
}*/
}
export default function App() {
  return (
    <Router>
      <Container2>
        {/*<Header />*/}
        <CssBaseline />
        <Navbar />
        <br />
        <Navigation />
        <br />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/shops">
            <Shops />
          </Route>
          <Route path="/product">
            <Product />
          </Route>
          <Route path="/sales">
            <Sales />
          </Route>
          <Route path="/reports">
            <Reports />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </Container2>
    </Router>
  );
}
