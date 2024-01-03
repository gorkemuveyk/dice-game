import styled from "styled-components";
import PropType from "prop-types";

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src="/img/dices.png" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

StartGame.propTypes = {
  toggle: PropType.func,
};

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  align-items: center;
  margin: 0 auto;

  .content {
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;

const Button = styled.button`
  color: #fff;
  background-color: #000;
  padding: 10px 18px;
  border-radius: 5px;
  min-width: 220px;
  border: none;
  font-size: 16px;
  border: 1px solid transparent;
  transition: 300ms background ease-in;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;
