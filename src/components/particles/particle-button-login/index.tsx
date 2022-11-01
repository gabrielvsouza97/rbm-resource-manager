import axios from "axios";
import { ReactElement, ReactNode, useState } from "react";
import { useNavigate } from "react-router";
import * as Styled from "./particle-button-style";

type ItemsButtonProps = {
    children: ReactNode;
    light?: boolean;
    dark?: boolean;
};

export default function ButtonLogin(props: ItemsButtonProps) {

    const navigate = useNavigate();

    async function Logando(
        loginInput: string | undefined,
        senhaInput: string | undefined
    ) {

        if (loginInput && senhaInput) {
            if (loginInput.length > 0 && senhaInput.length > 0) {
                //login = "admin1"
                //senha = "R@12b23m34!"
                try {
                    let requisicao = await axios.post(
                        "https://agendamento.carloschoma.com.br/login",
                        {
                            login: loginInput,
                            senha: senhaInput,
                        }
                    );
                    console.log(requisicao.data); 
                    navigate("/gabriel");
                    // login(loginInput, senhaInput)
                } catch {
                    console.log("login/senha incorreta");
                }
            }
        } else {
        }
    }

    return (
        <Styled.ButtonStyled
            onClick={() => Logando('admin1','R@12b23m34!')}
            light={props.light}
            dark={props.dark}
        >
            {props.children}
        </Styled.ButtonStyled>
    );
}
