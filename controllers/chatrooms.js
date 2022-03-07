// import models from "../models"
const models = require('../db/models')
import notFound from "./notFound"

const getChatroomById = async (id) => {
    const chatroomById = await models.chatrooms.findOne({
        where: {
            id
        }
    });

    return chatroomById
}

export const getChatrooms = async function (req, res) {
    const { params, query } = req

    let chatRooms = []
    if (query.groupId) {
        const chatroomById = await getChatroomById(query.groupId)
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

export const createChatroom = async (req, res) => {
    const { chatRoomId } = req.query

    try {
        if (!chatRoomId) {
            const newRoom = await models.chatrooms.create(req.body)
            res.json(newRoom.toJSON())
        } else {
            const room = await getChatroomById(chatRoomId)
            room.update(req.body)
            const updateRoom = await room.save()
            res.json(updateRoom.toJSON())
        }
    } catch (error) {
        console.log({ error })
        notFound(res)
    }
}

export default getChatrooms