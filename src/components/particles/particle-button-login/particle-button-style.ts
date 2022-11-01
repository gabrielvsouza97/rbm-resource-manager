import { THEME } from "../../../constants";
import { type } from "os";
import styled, { css } from "styled-components";
type LoginButton = {
    light ?: boolean;
    dark ?: boolean; 
}
const StyleLight = css`
    background-color: ${THEME.light.colors.primary2};
`
const StyleDark= css`
    background-color: ${THEME.dark.colors.primary2};
`

export const ButtonStyled = styled.button<LoginButton>`
    min-width: 410px;
    min-height: 58px;

    ${({light})=> StyleLight};
    ${({dark})=> StyleDark};
    border-radius: 6px;
    border: none;

    color: white;
    font-weight: 600;
    font-size: 16px;
    cursor: pointer;
    text-transform: uppercase;
`
