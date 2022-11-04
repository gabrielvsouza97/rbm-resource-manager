import styled, { css } from "styled-components";

type ButtonProps = {
tamanho ?: string;
reservar ?: boolean;
reservado ?: boolean;

}

const StyledReservar = css`

width: 94px;
height: 24px;
background-color: #2AB451;
color: #FFFFFF;
font-weight: 500;
font-size: 12px;
line-height: 18px;
text-transform: uppercase;

`
const StyledReservado = css`

width: 94px;
height: 24px;
background-color: #909194;
color: #FFFFFF;
font-weight: 500;
font-size: 12px;
line-height: 18px;
text-transform: uppercase;
cursor: auto;

`



export const ButtonStyled = styled.button<ButtonProps>`
  width: ${(props)=> props.tamanho ? props.tamanho : "100%"};
  height: 58px;
  background-color: ${({ theme }) => theme.colors.primary2};
  border-radius: 6px;
  border: none;
  color: ${({ theme }) => theme.colors.secondary4};
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  text-transform: uppercase;

  ${({reservar})=> reservar ? StyledReservar: ''}
  ${({reservado})=> reservado ? StyledReservado : ''}
`;
