import { FunctionComponent } from 'react';
import styles from './style/MoreInfoLink.module.css';


interface Props{
    src: string,
    text: string
}

export const MoreInfoLink: FunctionComponent<Props> = ({ src, text }) => {
    return (
        <a href={src} className={styles.link}>
            <p>{text}</p>
        </a>
    );
};