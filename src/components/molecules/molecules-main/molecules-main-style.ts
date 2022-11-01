import styled from "styled-components";
type SectionProps = {
  backgroundColor?: boolean;
};

export const StyledMain = styled.main`
  display: flex;
  position: absolute;
  width: 100%;
  top: 77px;
  height: 948px;
  padding: 0;
  background-color: #e1eef3;
`;

export const StyledSection = styled.section<SectionProps>`
  width: 411px;
  height: 577px;
  padding: 42px 32px;
  margin-top: 105px;
  background-color: ${(props) =>
    props.backgroundColor ? props.theme.colors.secondary4 : "transparent"};
`;
