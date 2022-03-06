import { getChatrooms, createChatroom } from "../../controllers/chatrooms";
import notFound from "../../controllers/notFound";

export default function handler(req, res) {
    switch (req.method) {
        case "POST":
            return createChatroom(req, res)
            break;
        case "GET":
            return getChatrooms(req, res);
        default: {
            return notFound(res)
        }
    }
}
