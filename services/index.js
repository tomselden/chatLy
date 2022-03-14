export const createChatroom = (name, imageURL) => fetch('/api/chatrooms', {
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

export const postMessage = ({
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
