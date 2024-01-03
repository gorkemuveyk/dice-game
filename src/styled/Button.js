import styled from "styled-components";

export const Button = styled.button`
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

export const OutlineButton = styled(Button)`
  background-color: #fff;
  color: #000;
  border: 1px solid #000;
  &:hover {
    background-color: black;
    color: #fff;
    border: 1px solid transparent;
  }
`;
