import styled from "styled-components";
import PropType from "prop-types";

const NumberSelector = ({
  selectedNumber,
  setSelectedNumber,
  error,
  setError,
}) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];
  const numberSelectorHandler = (value) => {
    setSelectedNumber(value);
    setError("");
  };
  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {arrNumber.map((item, i) => (
          <Box
            isSelected={item === selectedNumber}
            onClick={() => numberSelectorHandler(item)}
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

NumberSelector.propTypes = {
  selectedNumber: PropType.number,
  setSelectedNumber: PropType.func,
  error: PropType.string,
  setError: PropType.func,
};

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  .flex {
    display: flex;
    gap: 24px;
  }

  .error {
    color: red;
  }

  p {
    font-size: 24px;
  }

  @media (max-width: 576px) {
    align-items: center;
    justify-content: center;

    .flex {
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: 10px;
    }

    .error {
      font-size: 12px;
      text-align: center;
    }

    p {
      font-size: 16px;
      margin-top: 5px;
    }
  }

  @media (max-width: 768px) {
    p {
      text-align: center;
      width: 100%;
      font-size: 20px;
      margin-top: 5px;
    }
  }
`;

const Box = styled.div`
  width: 72px;
  height: 72px;
  font-size: 24px;
  font-weight: bold;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${(props) => (props.isSelected ? "#000" : "#fff")};
  color: ${(props) => (props.isSelected ? "#fff" : "#000")};

  @media (max-width: 576px) {
    margin-top: 5px;
    width: 36px;
    height: 36px;
  }
`;
