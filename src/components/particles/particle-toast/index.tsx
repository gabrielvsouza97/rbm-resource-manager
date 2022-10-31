import {CloseButton, Icon, Text, TextIconWrapper, ToastWrapper} from "./particle-toast-style";
import AlertIcon from "../../../../src/assets/img/toast-img/icon/alert.svg";
import BellIcon from "../../../../src/assets/img/toast-img/icon/bell.svg";
import CheckIcon from "../../../../src/assets/img/toast-img/icon/check.svg";
import InfoIcon from "../../../../src/assets/img/toast-img/icon/info.svg";
import StopIcon from "../../../../src/assets/img/toast-img/icon/stop.svg";
import AlertButton from "../../../../src/assets/img/toast-img/button/alert.svg";
import BellButton from "../../../../src/assets/img/toast-img/button/bell.svg";
import CheckButton from "../../../../src/assets/img/toast-img/button/check.svg";
import InfoButton from "../../../../src/assets/img/toast-img/button/info.svg";
import StopButton from "../../../../src/assets/img/toast-img/button/stop.svg";


const icons={
    alert: AlertIcon,
    bell: BellIcon,
    check: CheckIcon,
    info: InfoIcon,
    stop: StopIcon
}

const buttons={
    alert: AlertButton,
    bell: BellButton,
    check: CheckButton,
    info: InfoButton,
    stop: StopButton
}

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
            <Icon src={icons[props.variant]}/>
            <Text>{props.text}</Text>
        </TextIconWrapper>
            <CloseButton src={buttons[props.variant]}/>
        </ToastWrapper>        
        </>
    )
}