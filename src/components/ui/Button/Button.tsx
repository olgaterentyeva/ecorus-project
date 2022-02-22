import styles from "./Button.module.scss";

export const Button = (props: any) => {
    return (
        <>
            <button
                className={styles.button}
                type={props.type}
                onClick={props.onClick}
            >
                {props.buttonText}
            </button>

        </>
    );
}