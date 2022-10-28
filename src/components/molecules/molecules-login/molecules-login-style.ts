import styled from "styled-components";
type DivColorsProps = {
  labelColor?: string;
  underlineColor?: string;
};

export const StyledDivMain = styled.div`
  width: 411px;
  height: 577px;
  background-color: #ffffff;
  padding: 42px 32px;
`;

export const StyledDivHeader = styled.div`
  display: flex;
  padding: 0;
  margin: 0;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  text-align: center;
  h3 {
    padding-top: 50.7px;
    padding-bottom: 10px;
    font-weight: 700;
    font-size: 20px;
    text-align: center;
  }
  p {
    padding-bottom: 32px;
    text-align: center;
  }
`;

export const StyledDivForm = styled.div<DivColorsProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  label {
    padding-bottom: 4px;
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
    color: ${({ labelColor }) => labelColor};
  }
  input {
    margin-bottom: 18px;
  }
`;

export const StyledRemember = styled.div`
  display: flex;
  width: 100%;
  height: 30px;
  text-align: left;
  align-items: center;
  input {
    margin: 0;
    padding: 0;
    height: 20px;
    width: 20px;
    margin-right: 8px;
  }
  label {
    margin: 0;
    padding: 0;
  }
`;

export const StyledSectionAdctionals = styled.section<DivColorsProps>`
  display: flex;
  justify-content: space-between;
  width: 100%;
  a {
    width: 100%;
    outline: none;
    text-decoration: none;
  }
  p {
    border-bottom: 1px solid
      ${({ underlineColor }) => (underlineColor ? underlineColor : "black")};
  }
`;
