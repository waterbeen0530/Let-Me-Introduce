import styled from "styled-components";

export default function Item({ item }) {
  return (
    <ItemWrap>
      <Image img={item.img} />
      <Text>
        <h3>{item.title}</h3>
        <p>{item.content}</p>
      </Text>
    </ItemWrap>
  );
}

const ItemWrap = styled.div`
  position: relative;
  width: 340px;
  height: 500px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.5);
  transition: 0.4s ease-in-out;

  &:hover {
    transform: translate(0, -40px);
  }
`;

const Image = styled.div`
  width: 100%;
  height: 360px;
  background: #fff;
  border-radius: 10px 10px 0 0;

  background-image: url(${({ img }) => img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Text = styled.div`
  position: absolute;
  left: 50%;
  bottom: 20px;

  transform: translate(-50%, 0);
  text-align: center;
  h3 {
    white-space: nowrap;
    font-size: 24px;
  }
  p {
    white-space: pre-wrap;
    margin: 0;
    font-size: 15px;
    font-weight: 700;
  }
`;
