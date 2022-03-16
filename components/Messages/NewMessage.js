import { useState, useRef } from 'react';
import SendIcon from '@mui/icons-material/Send';
import { TextField, Button } from "@mui/material"

import styles from "./Message.module.css"
import { createNewMessage } from '../../services';

export default function NewMessage({ onSubmit, chatroomId, userId }) {
    const [text, setText] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (text) {
            createNewMessage({

                text, chatroomId, userId
            })
                .then(() => setText(""))
                .then(onSubmit)
        } else if (text.length > 250) {
            alert('Wordy! make smaller than 250 characters dude!')
        } else {
            alert('seems like you forgot to type something')
        }
    }
    return (
        <>
            <form className={styles.newMessageWrapper} onSubmit={handleSubmit} noValidate autoComplete="off">
                <TextField
                    id="standard-text"
                    value={text}
                    label="new message"
                    className={styles.inputField}
                    size="250"
                    onChange={
                        (event) => setText(event.target.value)
                    }
                />
                <Button type="submit" variant="contained" color="primary" className={styles.button}>
                    <SendIcon />
                </Button>
            </form>
        </>

    )
}
