import Chatrooms from "../../models/chatrooms"

export default function handler(req, res) {
    if (req.method === 'POST') {
        Chatrooms.create()
    } else if (req.method === "GET") {
        Chatrooms.findOne()
    }
}