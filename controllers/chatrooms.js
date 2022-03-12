// import models from "../models"
const models = require('../models')
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

    try {
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
            const allChats = await models.chatrooms.findAll({
                include: [
                    { model: models.messages, as: 'messages' },
                    { model: models.users, as: 'users' }
                ]
            });
            chatRooms = allChats;
        }
    } catch (error) {
        console.log({ error })
    }

    return res.json({ chatRooms })
}

export const createChatroom = async (req, res) => {
    try {
        const newRoom = await models.chatrooms.create(req.body)
        res.json(newRoom.toJSON())
    } catch (error) {
        console.log({ error })
        notFound(res)
    }
}

export const updateeChatroom = async (req, res) => {
    const { chatRoomId } = req.query

    if (!chatRoomId) {
        return notFound(res)
    }

    try {
        const room = await getChatroomById(chatRoomId)
        room.update(req.body)
        const updateRoom = await room.save()
        res.json(updateRoom.toJSON())
    } catch (error) {
        console.log({ error })
        notFound(res)
    }
}

export const deleteChatroom = async (req, res) => {
    const { chatRoomId } = req.query

    try {
        const room = await getChatroomById(chatRoomId)
        await room.destroy()
        res.status(200).send('deleted')
    } catch (error) {
        console.log({ error })
        notFound(res)
    }
}

export default getChatrooms
