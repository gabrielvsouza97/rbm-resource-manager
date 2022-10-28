import React from "react";
import styled from "styled-components";

type ToastWrapperStyle={
    onClick?: Function;
    variant?: "alert"|"check"|"info"|"notification"|"stop";
};

export const ToastWrapper = styled.div<ToastWrapperStyle>`
    margin-left: 200px;
    margin-top: 200px;
    width: 702px;
    height: 69px;
    background: ${ (props) => ( props.variant =="alert" ? "#FFF6EF" : "" )};
    background: ${ (props) => ( props.variant =="stop" ?  "#FFDEDE" : "")};
    background: ${ (props) => ( props.variant =="check" ? "#F2FFF7" : "")};
    background: ${ (props) => ( props.variant =="info" ? "#F3F3F3" : "")};
    background: ${ (props) => ( props.variant =="notification" ? "#F8FAFF" : "")};

    box-shadow: 0px 13px 19px rgba(0, 0, 0, 0.07);
    
    border: ${ (props) => ( props.variant =="alert" ? "1px solid #E77C40" : "" ) };
    border: ${ (props) =>( props.variant =="stop" ? "1px solid #DF1E1E" : "" ) };
    border: ${ (props) => ( props.variant =="check" ? "1px solid #76D8A3" : "" ) };
    border: ${ (props) =>( props.variant =="info" ? "1px solid #D0D0D0" : "" ) };
    border: ${ (props) => ( props.variant =="notification" ? "1px solid #23A6F0" : "" )};
    display: flex;
    align-items:center ;
    justify-content:left ;
`;

export const Imagem = styled.img`
width:  22px;
height: 19px;
margin-left: 20px;
`;