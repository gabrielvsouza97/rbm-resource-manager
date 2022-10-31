import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  width: 100vw;
  top: 77px;
  height: 948px;
  padding: 0;
  background-color: #e1eef3;
  overflow: auto;
`;

export const StyledSection = styled.section`
  width: 411px;
  height: 577px;
  padding: 42px 32px;
  margin-top: 105px;
  background-color: ${({ theme }) => theme.colors.secondary4};
`;
