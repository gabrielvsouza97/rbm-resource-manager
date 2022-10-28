import {Imagem, ToastWrapper} from "./particle-toast-style"

type ToastType = {
    onClick?: Function;
    variant?: "alert"|"check"|"info"|"notification"|"stop";
}


export default function ParticleToast(props: ToastType){
    return (
        <>
        <ToastWrapper variant={props.variant}>
            <Imagem src={`../../../../src/assets/img/toast-img/check.svg`}></Imagem>TESTE
        </ToastWrapper>        
        </>
    )
}