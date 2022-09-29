import styled from "styled-components";

export default function Item({ item }) {
  return (
    <ItemWrap>
      {item.link ? (
        <a href={item.link}>
          <Image img={item.img} />
        </a>
      ) : (
        <Image img={item.img} />
      )}

      <Text>
        <h3>{item.title}</h3>
        <p>{item.content}</p>
      </Text>
    </ItemWrap>
  );
}

const ItemWrap = styled.div``;

const Image = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 10px;
  background-image: url(${({ img }) => img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Text = styled.div`
  color: black;
  text-align: center;
  h3 {
    white-space: nowrap;
    font-size: 24px;
  }
  p {
    font-size: 16px;
    font-weight: 700;
  }
`;
