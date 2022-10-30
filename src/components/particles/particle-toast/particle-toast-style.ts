import React from "react";
import styled from "styled-components";

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
  background: ${(props) => (props.variant == "alert" ? "#FFF6EF" : "")};
  background: ${(props) => (props.variant == "stop" ? "#FFDEDE" : "")};
  background: ${(props) => (props.variant == "check" ? "#F2FFF7" : "")};
  background: ${(props) => (props.variant == "info" ? "#F3F3F3" : "")};
  background: ${(props) => (props.variant == "bell" ? "#F8FAFF" : "")};

  box-shadow: 0px 13px 19px rgba(0, 0, 0, 0.07);

  border: ${(props) => (props.variant == "alert" ? "1px solid #E77C40" : "")};
  border: ${(props) => (props.variant == "stop" ? "1px solid #DF1E1E" : "")};
  border: ${(props) => (props.variant == "check" ? "1px solid #76D8A3" : "")};
  border: ${(props) => (props.variant == "info" ? "1px solid #D0D0D0" : "")};
  border: ${(props) => (props.variant == "bell" ? "1px solid #23A6F0" : "")};
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
  color: ${(props) => (props.variant == "alert" ? "#FFF6EF" : "")};
  color: ${(props) => (props.variant == "stop" ? "#FFDEDE" : "")};
  color: ${(props) => (props.variant == "check" ? "#F2FFF7" : "")};
  color: ${(props) => (props.variant == "info" ? "#F3F3F3" : "")};
  color: ${(props) => (props.variant == "bell" ? "#F8FAFF" : "")};
`;

export const TextIconWrapper = styled.div`
  display: flex ;
`