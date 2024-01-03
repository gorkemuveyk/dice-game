import styled from "styled-components";
import PropType from "prop-types";
import { Button } from "../styled/Button";

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div className="img">
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

  @media (max-width: 1024px) {
    flex-direction: row;
    justify-content: center;
    gap: 10px;
    .img {
      img {
        width: 100%;
      }

      width: 350px;
    }

    .content {
      h1 {
        font-size: 76px;
        white-space: nowrap;
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 10px;
    .img {
      img {
        width: 100%;
      }

      width: 250px;
    }

    .content {
      h1 {
        font-size: 52px;
        white-space: nowrap;
      }
    }
  }

  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80vh;
    .img {
      img {
        width: 100%;
      }
      width: 250px;
      margin: 0 auto;
    }

    .content {
      h1 {
        font-size: 52px;
        white-space: nowrap;
      }

      Button {
        width: 100%;
      }
    }
  }
`;
