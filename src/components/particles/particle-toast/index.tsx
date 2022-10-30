import {CloseButton, Icon, Text, TextIconWrapper, ToastWrapper} from "./particle-toast-style"

type ToastType = {
    onClick?: Function;
    variant: "alert"|"check"|"info"|"bell"|"stop";
    text?: string;
}


export default function ParticleToast(props: ToastType){
    return (
        <>
        
        <ToastWrapper variant={props.variant}>
            <TextIconWrapper>
            <Icon src={`/../../../../src/assets/img/toast-img/icon/${props.variant}.svg`}/>
            <Text>{props.text}</Text>
        </TextIconWrapper>
            <CloseButton src={`/../../../../src/assets/img/toast-img/button/${props.variant}.svg`}/>
        </ToastWrapper>        
        </>
    )
}