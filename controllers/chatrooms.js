// import models from "../models"
const models = require('../db/models')
import notFound from "./notFound"

console.log({
    models
})

export const getChatrooms = async function (req, res) {
    const { params, query } = req

    let chatRooms = []
    if (query.groupId) {
        const chatroomById = await models.chatrooms.findOne({
            where: {
                id: query.groupId
            }
        });
        chatRooms.push(chatroomById)
    } else if (query.groupName) {
        const chatroomByName = await models.chatrooms.findAll({
            where: {
                name: query.groupName
            }
        });
        chatRooms.push(chatroomByName)
    } else {
        const allChats = await models.chatrooms.findAll();
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

export const createChatroom = (req, res) => {
    res.status(200).json({ name: 'John Doe' })
}

export default getChatrooms