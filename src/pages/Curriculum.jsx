import styled from "styled-components";
import { items } from "../docs/curriculum";
import Item from "../components/curriculum/Item";

export default function Curriculum() {
  return (
    <Container id="Curriculum">
      <Title>
        <h2>커리큘럼</h2>
        <p>다양한 학과를 통해 원하는 분야의 역량을 키울 수 있습니다</p>
      </Title>
      <Wrapper>
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 110vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;

const Wrapper = styled.div`
  gap: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h2 {
    margin: 0;
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 10px;
  }
  p {
    margin: 0;
    font-size: 18px;
    font-weight: 700;
  }
`;
