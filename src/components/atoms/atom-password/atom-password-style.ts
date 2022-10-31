import styled from "styled-components";

export const StyledContainerPassword = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-start;
  width: 100%;
  height: 54px;
  svg {
    display: flex;
    position: absolute;
    right: 16.3px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
  svg.fa-eye {
    color: ${({ theme }) => theme.colors.secondary2};
  }
  svg.fa-eye-slash {
    color: ${({ theme }) => theme.colors.secondary1};
  }
`;
