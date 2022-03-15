import { DoorBack } from "@mui/icons-material";

const API_KEY = "39953e60e44e63b26905abd9dbcb6760";
const API_URL = "https://api.imgbb.com/1/upload";

// free image hosting
// https://api.imgbb.com/
export const uploadImage = (image) => {
    const formData = new FormData();
    formData.append('image', image)
    return fetch(`${API_URL}?key=${API_KEY}&image=${image}`, {
        method: 'POST',
        body: formData
    })
}

// api calls to talk to our DB
export const createChatroom = ({ name, imageURL, userId }) => fetch('/api/chatrooms', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name,
        imageURL,
        userId
    })
})
export const createUser = ({
    username,
    email,
    avatarURL
}) => fetch('/api/users', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        username,
        email,
        avatarURL
    })
})
export const getUserByEmail = (email) => fetch(
    `/api/users?email=${email}`,
    {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    })
export const createNewMessage = ({
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
