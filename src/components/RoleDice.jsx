import { useState } from "react";
import styled from "styled-components";

const RoleDice = () => {
  const [currentDice, setCurrentDice] = useState(1);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice(randomNumber);
  };

  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img
          src={`/img/dice/dice_${currentDice}.png`}
          alt={`Dice ${currentDice}`}
        />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .dice {
    cursor: pointer;
  }

  p {
    font-size: 24px;
  }
`;
