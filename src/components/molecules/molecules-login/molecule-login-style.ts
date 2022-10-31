import { THEME } from "../../../constants";
import styled from "styled-components";
type DivColorsProps = {
  labelColor?: keyof typeof THEME.light.colors;
  underlineColor?: string;
};

export const StyledDivHeader = styled.div`
  display: flex;
  padding: 0;
  margin: 0;
  flex-direction: column;
  align-items: center;
  width: 100%;
  text-align: center;
  h3 {
    padding-top: 50.7px;
    padding-bottom: 10px;
    font-weight: 700;
    font-size: 20px;
    line-height: 21px;
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
    width: 100%;
    text-align: left;
    color: ${(props) =>
      props.labelColor
        ? props.theme.colors[props.labelColor]
        : props.theme.colors.secondary3};
  }
  input {
    width: 377px;
    margin-bottom: 18px;
  }
  button {
    margin-top: 24px;
    margin-bottom: 32px;
  }
  a {
    color: ${({ theme }) => theme.colors.secondary3};
    font-size: 14px;
  }
  span {
    font-weight: 600;
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
    font-weight: 400;
  }
`;

export const StyledSectionAdctionals = styled.section<DivColorsProps>`
  display: flex;
  justify-content: space-between;
  width: 100%;
  a {
    width: 270px;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.secondary3};
    outline: none;
    /* text-decoration: none; */
    text-align: right;
    font-weight: 500;
  }
`;
