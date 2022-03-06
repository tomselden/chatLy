import Chatrooms from "../../models/chatrooms"
import notFound from "./notFound"

const getChatrooms = async function (req, res) {
    const { params, query } = req

    let chatRooms = []
    if (query.groupId) {
        const chatroomById = await Chatrooms.findOne({
            where: {
                id: query.groupId
            }
        });
        chatRooms.push(chatroomById)
    } else if (query.groupName) {
        const chatroomByName = await Chatrooms.findAll({
            where: {
                name: query.groupName
            }
        });
        chatRooms.push(chatroomByName)
    } else {
        const allChats = await Chatrooms.findAll();
        chatRooms = [
            ...chatRooms,
            ...allChats
        ]
    }

    if (chatRooms.length) {
        return res.json({ chatRooms })
    } else {
        return notFound(res)
    }
}

export default getChatrooms