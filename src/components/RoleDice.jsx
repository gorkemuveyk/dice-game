import styled from "styled-components";
import PropType from "prop-types";

const RoleDice = ({ roleDice, currentDice }) => {
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

RoleDice.propTypes = {
  roleDice: PropType.func,
  currentDice: PropType.number,
};
