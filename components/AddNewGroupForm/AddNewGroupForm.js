
import React, { useState } from "react"
import { TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import UploadButtons from "../UploadImage/UploadImage";

const postChatroom = (name, imageURL) => fetch('/api/chatrooms', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name,
        imageURL
    })
})

export default function AddNewGroupForm({ onSubmit }) {
    const [groupName, setGroupName] = useState('');
    const [image, setImage] = useState(null);
    const handleSubmit = (event) => {
        event.preventDefault();

        postChatroom(groupName, image)
            .then(onSubmit)
    }
    return <form>
        <TextField
            id="outlined-basic"
            variant="outlined"
            fullWidth
            label="Group Name"
            onChange={(event) => {
                setGroupName(event.target.value)
            }}
        />
        <Divider />
        <Typography gutterBottom variant="h5" component="div">
            Group Icon
        </Typography>
        <UploadButtons onUpload={setImage} />

        <Divider />
        <Button variant="contained" onClick={handleSubmit}>Create Group</Button>
    </form>
}
