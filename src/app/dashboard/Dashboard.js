import React from "react";
import styled from "styled-components";

import Page from "../../components/Page";
import Grid from "../../components/Grid";
import Card from "../../components/Card";
import { Image } from "react-native";
import Dash from "../../components/Dashboard";
import { Row, Col } from "react-bootstrap";
const Container = styled.div``;

const Dashboard = () => {
  return (
    <Container fluid style={{ overflowY: "scroll" }}>
      <Page>
        {/*<Page.Title>Dashboard</Page.Title>
        <CustomScrollView>
          
        </CustomScrollView>*/}
        <Row>
          <Col id="page-content-wrapper">
            <Image
              style={{ height: 150, resizeMode: "contain" }}
              source={{
                uri: "logokey.png"
              }}
            />
            <Dash />
          </Col>
        </Row>
      </Page>
    </Container>
  );
};

export default Dashboard;
