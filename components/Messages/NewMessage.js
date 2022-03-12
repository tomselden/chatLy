import SendIcon from '@mui/icons-material/Send';
import { TextField, Button } from "@mui/material"
import styles from "./Message.module.css"

console.log({
    SendIcon
})

export default function ({ }) {
    return (
        <>
            <form className={styles.newMessageWrapper} noValidate autoComplete="off">
                <TextField
                    id="standard-text"
                    label="new message"
                    className={styles.inputField}
                //margin="normal"
                />
                <Button variant="contained" color="primary" className={styles.button}>
                    <SendIcon />
                </Button>
            </form>
        </>

    )
}
