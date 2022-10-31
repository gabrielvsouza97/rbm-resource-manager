import React from "react";
import styled from "styled-components";

const bgColor = {
  alert: "#FFF6EF",
  stop: "#FFDEDE",
  check: "F2FFF7",
  info: "#F3F3F3",
  bell: "#F8FAFF"
}

const borderColor = {
  alert: "1px solid #E77C40",
  stop:  "1px solid #DF1E1E",
  check: "1px solid #76D8A3",
  info: "1px solid #D0D0D0",
  bell: "1px solid #23A6F0"
}

const textColor = {
  alert: "#E77C40",
  stop:  "#E0232E",
  check: "#2DC071",
  info: "#252B42",
  bell: "#23A6F0"
}

type ToastWrapperStyle = {
  onClick?: Function;
  variant?: "alert" | "check" | "info" | "bell" | "stop";
};

type ToastTextStyle = {
  variant?: "alert" | "check" | "info" | "bell" | "stop";
};

export const ToastWrapper = styled.div<ToastWrapperStyle>`
  margin-left: 100px;
  margin-top: 20px;
  width: 410px;
  height: 58px;
  background: ${(props) => (props.variant  ? bgColor[props.variant] : "")};

  box-shadow: 0px 13px 19px rgba(0, 0, 0, 0.07);

  border: ${(props) => (props.variant ? borderColor[props.variant] : "")};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Icon = styled.img`
  width: 22px;
  height: 19px;
  margin-left: 20px;
`;

export const CloseButton = styled.img`
  width: 22px;
  height: 19px;
  margin-right: 20px;
  border-radius: 100%;
`;

export const Text = styled.div<ToastTextStyle>`
margin-left: 20px ;
  color: ${(props) => (props.variant ? textColor[props.variant] : "")};
`;

export const TextIconWrapper = styled.div`
  display: flex ;
`