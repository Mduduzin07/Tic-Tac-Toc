import styled from "styled-components";

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.text};
  font-size: 3rem;
  background-color: transparent;
  font-family: pacifico,cursive;
`;

export const SubTitle = styled.h2`
  color: ${(props) => props.theme.colors.text};
  font-size: 24px;
  font-weight: 200;
  background-color: transparent;
  padding:10px;
`;

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
