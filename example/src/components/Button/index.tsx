import styles from './style.module.css'

interface Props {
    text: string;
    onClick: () => void;
    classNameButton?: object;
}

export const Button = (props: Props) => {
    return (
        <button className={`${styles.button}  `} onClick={props.onClick}>{props.text}</button>
    )
}

