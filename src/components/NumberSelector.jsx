import { useState } from "react";
import styled from "styled-components";

const NumberSelector = () => {
  const arrNumber = [1, 2, 3, 4, 5, 6];
  const [selectedNumber, setSelectedNumber] = useState(arrNumber[0]);

  return (
    <NumberSelectorContainer>
      <div className="flex">
        {arrNumber.map((item, i) => (
          <Box
            isSelected={item === selectedNumber}
            onClick={() => setSelectedNumber(item)}
            key={i}
          >
            {item}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  .flex {
    display: flex;
    gap: 24px;
  }

  p {
    font-size: 24px;
  }
`;

const Box = styled.div`
  width: 72px;
  height: 72px;
  font-size: 24px;
  font-weight: bold;
  border: 1px solid black;
  display: grid;
  place-items: center;
  cursor: pointer;
  background-color: ${(props) => (props.isSelected ? "#000" : "#fff")};
  color: ${(props) => (props.isSelected ? "#fff" : "#000")};
`;
