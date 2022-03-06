import getChatrooms from "../../controllers/chatrooms";
import notFound from "../../controllers/notFound";

export default function handler(req, res) {
    switch (req.method) {
        case "POST":
            // figure this out later
            break;
        case "GET":
            return getChatrooms(req, res);
        default: {
            return notFound(res)
        }
    }
}
