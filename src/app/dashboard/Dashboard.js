import React from "react";
import styled from "styled-components";

import Page from "../../components/Page";
import Grid from "../../components/Grid";
import Card from "../../components/Card";
import { Image, ScrollView } from "react-native";
import Dash from "../../components/Dashboard";

const Container = styled.div``;

const Dashboard = () => {
  return (
    <Container fluid style={{ overflowY: "scroll" }}>
      <Page>
        {/*<Page.Title>Dashboard</Page.Title>*/}
        <Dash />
      </Page>
    </Container>
  );
};

export default Dashboard;
