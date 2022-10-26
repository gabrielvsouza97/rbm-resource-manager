import styled from "styled-components";

export const SpanInit = styled.span<{ colorText: string }>`
  color: ${({ colorText }) => colorText};
`;
