import { getChatrooms, createChatroom, deleteChatroom, joinChatroom } from "../../controllers/chatrooms";
import notFound from "../../controllers/notFound";

export default function handler(req, res) {
    switch (req.method) {
        case "POST":
            if (req.query.join) {
                return joinChatroom(req, res);
            }
            return createChatroom(req, res)
            break;
        case "PUT":
            return updateChatroom(req, res)
            break;
        case "GET":
            return getChatrooms(req, res);
        case "DELETE":
            return deleteChatroom(req, res);
        default: {
            return notFound(res)
        }
    }
}
