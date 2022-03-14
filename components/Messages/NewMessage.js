import { useState, useRef } from 'react';
import SendIcon from '@mui/icons-material/Send';
import { TextField, Button } from "@mui/material"

import styles from "./Message.module.css"

const postMessage = ({
    chatroomId = 1,
    userId = 1,
    imageURL = "",
    text = "",
}) => fetch('/api/messages', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        chatroomId,
        userId,
        imageURL,
        text
    })
})

export default function ({ onSubmit, chatroomId, userId }) {
    const [text, setText] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        postMessage({
            text, chatroomId, userId
        })
            .then(() => setText(""))
            .then(onSubmit)
    }
    return (
        <>
            <form className={styles.newMessageWrapper} onSubmit={handleSubmit} noValidate autoComplete="off">
                <TextField
                    id="standard-text"
                    value={text}
                    label="new message"
                    className={styles.inputField}
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
