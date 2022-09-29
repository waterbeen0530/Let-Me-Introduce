import styled from "styled-components";

export default function Footer() {
  return (
    <Container id="footer">
      <Wrapper>
        <p>DSM-LimSuBeen</p>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #a9e34b;
`;

const Wrapper = styled.div`
  width: 76vw;
  height: 66%;
  border-bottom: 2px #fff solid;
  display: flex;
  align-items: flex-end;
  p {
    margin: 0;
    font-size: 70px;
    font-weight: 800;
    color: #fff;
  }
`;
