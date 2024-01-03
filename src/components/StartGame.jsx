import styled from "styled-components";
import PropType from "prop-types";
import { Button } from "../styled/Button";

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
