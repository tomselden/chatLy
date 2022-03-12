import { getMessages, createMessage } from "../../controllers/messages";
import notFound from "../../controllers/notFound";

export default function handler(req, res) {
    switch (req.method) {
        case "POST":
            return createMessage(req, res)
        case "GET":
            return getMessages(req, res);
        default: {
            return notFound(res)
        }
    }
}
