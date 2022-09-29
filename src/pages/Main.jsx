import styled from "styled-components";
import people from "../assets/img/people.svg";

export default function Main() {
  return (
    <Container id="main">
      <Wrapper>
        <img src={people} alt="" />
        <Frame>
          <h2>청란 여러분,</h2>
          <h2>만나서 반갑습니다!</h2>
          <p>대덕 소프트웨어 마이스터고 - 임수빈</p>
        </Frame>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f4fce3;
`;

const Wrapper = styled.div`
  width: 100vw;
  margin-bottom: -70px;
  display: flex;
  flex-direction: row-reverse;
  box-sizing: border-box;
  padding: 0 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 460px;
  }
`;

const Frame = styled.div`
  h2 {
    margin: 0 0 10px 0;
    font-size: 60px;
  }
  p {
    margin: 0;
    font-weight: 700;
    font-size: 18px;
  }
`;
