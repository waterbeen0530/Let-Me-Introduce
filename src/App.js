import { useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";

export default function App() {
  const frame = useRef();
  const firstText = useRef();
  const secondText = useRef();

  const onMouseMove = ({ clientX }) => {
    frame.style.width = window.innerWidth / 2 - 15 + "px";
    frame.style.width = window.innerWidth - 30 + "px";

    const x = clientX - window.innerWidth / 2;

    const firstText = ".firstText";
    const secondText = ".secondText";

    gsap.TweenLite.to(`${firstText}, ${secondText}`, 1, {
      x: x,
      ease: gsap.Sine.easeOut,
    });
  };

  return (
    <Container ref={frame} onMouseMove={onMouseMove}>
      <Wrapper>
        <First>
          <div className="firstText" ref={firstText}>
            CheongRan
          </div>
        </First>
        <Second>
          <div className="secondText" ref={secondText}>
            CheongRan
          </div>
        </Second>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0;
  background: rgb(29, 30, 34);
  box-sizing: border-box;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-kerning: auto;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1rem;
  font-size: 5rem;
`;

const First = styled.div`
  height: 100%;
  width: 50%;
  overflow-x: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  color: black;
  div {
    transform: skewY(-5deg);
    position: relative;
    left: 50%;
    font-size: 6vmax;
  }
`;

const Second = styled.div`
  height: 100%;
  width: 50%;
  overflow-x: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: black;
  color: white;
  div {
    transform: skewY(5deg);
    position: relative;
    left: -50%;
    font-size: 6vmax;
  }
`;

const TextName = styled.div``;
