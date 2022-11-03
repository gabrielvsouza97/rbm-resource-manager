import styled from "styled-components";
export const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  label {
    font-weight: 500;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.secondary3};
    margin-bottom: 4px;
  }
  input {
    background-color: ${({ theme }) => theme.colors.secondary4};
    margin-bottom: 24px;
  }
  button {
    margin-bottom: 24px;
  }
  p {
    color: ${({ theme }) => theme.colors.secondary3};
    font-size: 10px;
    font-weight: 400;
    line-height: 15px;
    text-align: center;
  }
  svg {
    color: ${({ theme }) => theme.colors.secondary1};
  }
`;
