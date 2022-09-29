import styled from "styled-components";
import Club from "./pages/Club";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Curriculum from "./pages/Curriculum";
import Main from "./pages/Main";
import School from "./pages/School";

export default function App() {
  return (
    <Container>
      <Header />
      <Main />
      <School />
      <Curriculum />
      <Club />
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  background: #f9f6f6;
`;
