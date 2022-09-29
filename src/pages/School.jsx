import styled from "styled-components";
import special from "../assets/img/school/special.jpg";
import job from "../assets/img/school/job.jpg";

export default function School() {
  return (
    <Container id="school">
      <Wrapper>
        <Title>
          <Content>
            <h2>소프트웨어 + 마이스터</h2>
            <p className="content">
              컴퓨터 시스템 운영 프로그램 장인을 육성하는 고등학교
            </p>
          </Content>
        </Title>
        <Frame>
          <FirstBox>
            <Text>
              <p>특목고</p>
              <span>영재 육성을 위한 특수 목적 고등학교</span>
            </Text>
          </FirstBox>
          <SecondBox>
            <Text>
              <p>취업</p>
              <span>사회의 일원으로 먼저 나아가는</span>
            </Text>
          </SecondBox>
        </Frame>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 120vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div``;

const Title = styled.div`
  width: 100vw;
  display: flex;
  margin-bottom: 30px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Content = styled.div`
  h2 {
    text-align: center;
    margin: 0;
    font-size: 40px;
    font-weight: 600;
  }
  p {
    margin: 0;
    font-size: 20px;
    font-weight: 700;
  }
`;

const Frame = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`
  position: relative;
  width: 400px;
  height: 540px;
  opacity: 0.6;
  transition: 0.3s ease-in-out;
  background: red;

  &:hover {
    opacity: 1;

    & > div > span {
      display: block;
    }
    & > div > p {
      transform: translate(0, -30px);
    }
  }
`;

const FirstBox = styled(Box)`
  border-radius: 5px 0 0 5px;
  background-image: url(${special});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const SecondBox = styled(Box)`
  border-radius: 0 5px 5px 0;

  background-image: url(${job});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Text = styled.div`
  /* position: absolute;
  bottom: 16px;
  left: 22px; */

  p,
  span {
    position: absolute;
    bottom: 30px;
    left: 22px;
  }

  p {
    transition: 0.4s ease-in-out;

    margin: 0 0 0 0;
    font-size: 24px;
    font-weight: 800;
    color: #fff;
  }

  span {
    margin: 0;
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    display: none;
  }
`;
