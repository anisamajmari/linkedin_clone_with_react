/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from "styled-components";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

import Leftside from "./Leftside";
import Main from "./Main";
import Rightside from "./Rightside";

const Home = (props) => {
  return (
    <Container>
      {!props.user && <Navigate to="/" />}
      <InfoBar>
        This is not real linkedin. This is just a simple copy build with
        firebase for portifolio purposes.
      </InfoBar>
      <Section>
        <h5>
          <a href="">Hiring in a hurry? -</a>
        </h5>
        <p>
          Find talented pros in record time with Upwork and keep business
          moving.
        </p>
      </Section>
      {props.user && (
        <Layout>
          <Leftside />
          <Main />
          <Rightside />
        </Layout>
      )}
    </Container>
  );
};

const InfoBar = styled.div`
  padding: 20px 30px;
  background-color: #fca49a;
  color: red;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  position: sticky;
`;

const Container = styled.div`
  padding-top: 52px;
  max-width: 100%;
`;

const Section = styled.section`
  min-height: 50px;
  padding: 16px 0;
  box-sizing: content-box;
  text-decoration: underline;
  display: flex;
  justify-content: center;

  h5 {
    color: #0a66c2;
    font-size: 14px;

    a {
      font-weight: 700;
    }
  }

  p {
    font-size: 14px;
    color: #434649;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 5px;
  }
`;

const Layout = styled.div`
  display: grid;
  grid-template-areas: "leftside main rightside";
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(303px 7fr);
  column-gap: 25px;
  row-gap: 25px;
  /* grid-template-rows: auto; */
  margin: 25px 0;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

export default connect(mapStateToProps)(Home);
