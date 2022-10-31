import styled from "styled-components";

export const StyledHeader = styled.header`
  display: fixed;
  position: relative;
  top: 0;
  width: 100vw;
  height: 76px;
  background-color: ${({ theme }) => theme.colors.secondary4};
`;

export const StyledDiv = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  top: 0;
  max-width: 1440px;
  height: 76px;
  left: 50%;
  transform: translateX(-50%);

  img {
    margin: 25px 0 0 45px;
    height: 35.3px;
    width: 122px;
  }
`;
