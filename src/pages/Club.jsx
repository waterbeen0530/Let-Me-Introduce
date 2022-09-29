import styled from "styled-components";
import { items } from "../docs/clubDoc";
import Item from "../components/club/Item";

export default function Club() {
  return (
    <Container id="club">
      <Wrapper>
        <Title>
          <h2>DSM-동아리</h2>
          <p>프로젝트 개발을 위한 동아리가 활성화 되어 있습니다!</p>
        </Title>
        <Frame>
          {items.map((item, i) => (
            <Item key={i} item={item} />
          ))}
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
  background: #f1f3f5;
`;

const Wrapper = styled.div``;

const Title = styled.div`
  width: 100vw;
  display: flex;
  margin-bottom: 70px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h2 {
    margin: 0;
    font-size: 40px;
    font-weight: 600;
  }
  p {
    margin: 0;
    font-size: 18px;
    font-weight: 700;
  }
`;

const Frame = styled.div`
  gap: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
