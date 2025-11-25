import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 100vw;
  padding: 0 2rem;
  background-color: ${(props) => props.theme.colors.primary};
  text-align: center;
`;
