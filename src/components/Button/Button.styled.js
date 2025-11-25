import styled from "styled-components";

export const ButtonWrapper = styled.button`
  color: ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.secondary};
  padding: 20px 30px;
  margin: 20px;
  min-width: 300px;
  font-size: 1.5rem;
  border: none;
  font-weight: 500;
  border-radius: 10px;

  &:hover {
    box-shadow: 0px 0px 10px ${(props) => props.theme.colors.purple};
    cursor: pointer;
  }
`;
