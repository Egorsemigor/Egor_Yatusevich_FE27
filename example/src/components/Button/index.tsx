import styles from './style.module.css'

interface Props {
    text: string;
    onClick: () => void;
    className?: any;
}

export const Button = (props: Props) => {
    return (
        <button className={`${styles.button} ${props.className} `} onClick={props.onClick}>{props.text}</button>
    )
}

