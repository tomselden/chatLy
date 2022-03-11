import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';

const Input = styled('input')({
    display: 'none',
});

const API_KEY = "39953e60e44e63b26905abd9dbcb6760";
const API_URL = "https://api.imgbb.com/1/upload";

// free image hosting
// https://api.imgbb.com/
const uploadImage = (image) => {
    const formData = new FormData();
    formData.append('image', image)
    return fetch(`${API_URL}?key=${API_KEY}&image=${image}`, {
        method: 'POST',
        body: formData
    })
}

export default function UploadButtons({ onUpload }) {
    const [imageURL, setImageURL] = useState('')
    return (
        <Stack direction="row" alignItems="center" spacing={2}>
            <label htmlFor="contained-button-file">
                <Input accept="image/*" id="contained-button-file" onChange={async (event) => {
                    const response = await uploadImage(event.target.files[0]);
                    const { data } = await response.json();
                    console.log({
                        url: data.url
                    })
                    setImageURL(data.url)
                    onUpload(data.url)
                }} multiple type="file" />
                <Button variant="contained" component="span">
                    Upload
                </Button>
            </label>
            <Avatar
                alt="Remy Sharp"
                src={imageURL}
                sx={{ width: 56, height: 56 }}
            />
        </Stack>
    );
}
