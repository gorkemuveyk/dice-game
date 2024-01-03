import styled from "styled-components";
import PropType from "prop-types";

const TotalScore = ({ score }) => {
  return (
    <ScoreContainer>
      <h1>{score}</h1>
      <p>Total Score</p>
    </ScoreContainer>
  );
};

export default TotalScore;

const ScoreContainer = styled.div`
  text-align: center;
  max-width: 200px;
  h1 {
    font-size: 100px;
    font-weight: bold;
    line-height: 100px;
  }

  p {
    font-size: 24px;
  }
`;

TotalScore.propTypes = {
  score: PropType.number,
};
