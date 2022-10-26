import {ToastButton} from "./particle-toast-button-style"

type ToastButtonType = {
    onClick?: Function;
    variant?: string;
    children: React.ReactNode;
}


export default function ParticleToastButton(props: ToastButtonType){
    return (
        <ToastButton>{props.children}</ToastButton>
    )
}