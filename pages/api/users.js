import { createUser, getUserBy, updateUser } from "../../controllers/users";
import notFound from "../../controllers/notFound";

export default function handler(req, res) {
    switch (req.method) {
        case "POST":
            return createUser(req, res)
        case "PUT":
            return updateUser(req, res);
        case "GET":
            return getUserBy(req, res);
        default: {
            return notFound(res)
        }
    }
}
