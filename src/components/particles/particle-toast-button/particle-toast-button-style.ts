import styled from "styled-components";

type ToastButtonStyle={
    onClick?: Function,
    variant?: string
}

export const ToastButton = styled.button<ToastButtonStyle>`
color: red;
`;