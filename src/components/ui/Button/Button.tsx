import styles from "./Button.module.scss";
import {FC} from "react";

interface ButtonProps {
    type: any,
    onClick: any,
    buttonText?: string,
    buttonImg?: any,
    buttonColor: string
}

export const Button: FC<ButtonProps> = (props) => {
    return (
        <>
            <button
                className={styles.button}
                style={{"backgroundColor": `${props.buttonColor}`}}
                type={props.type}
                onClick={props.onClick}
            >
                {props.buttonText}
                {props.buttonImg}
            </button>

        </>
    );
}