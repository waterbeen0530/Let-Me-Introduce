import styled from "styled-components";
import { Link } from "react-scroll";

export default function Header() {
  return (
    <Container>
      <Wrapper>
        <Link to="main" spy={true} smooth={true}>
          <p>CHEONGRAN</p>
        </Link>
      </Wrapper>
      <Frame>
        <Link to="school" spy={true} smooth={true}>
          <p>학교 소개</p>
        </Link>
        <Link to="Curriculum" spy={true} smooth={true}>
          <p>커리큘럼</p>
        </Link>
        <Link to="club" spy={true} smooth={true}>
          <p>동아리</p>
        </Link>
        <Link to="footer" spy={true} smooth={true}>
          <p>개발자</p>
        </Link>
      </Frame>
    </Container>
  );
}

const Container = styled.div`
  z-index: 100;
  position: fixed;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #000;

  p {
    cursor: pointer;
    margin: 0;
    font-size: 30px;
    font-weight: 900;
  }
`;

const Frame = styled.div`
  width: 70vw;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & p {
    cursor: pointer;
  }
`;
