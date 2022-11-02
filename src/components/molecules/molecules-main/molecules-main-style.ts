import styled from "styled-components";
type SectionProps = {
  backgroundColor?: boolean;
};

export const StyledMain = styled.main`
  display: flex;
  width: 1440px;
  top: 77px;
  height: 948px;
  padding: 0;
  background-color: #e1eef3;
  justify-content: center;
  margin:auto;
`;

export const StyledSection = styled.section<SectionProps>`
  width: 411px;
  height: 577px;
  padding: 42px 32px;
  margin: 5%;
  background-color: ${(props) =>
    props.backgroundColor ? props.theme.colors.secondary4 : "transparent"};
`;

export const StyledDivSection = styled.div`
  height:700px;
  width: 800px;
  margin: 5%;
  text-align: start;
  display: grid;
  align-items: flex-start;
`;

export const DivAlinharLi = styled.div` 
  display: flex;
  li{
   list-style-position : center;
   padding-right: 15px;
  }
`;
