import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Avatar(props) {
    return (
        <div className={styles.container}>
            <img src={props.avatar} />
        </div>
    )
}
