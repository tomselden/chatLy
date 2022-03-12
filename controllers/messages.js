// import models from "../models"
const models = require('../models')
import notFound from "./notFound"

const getMessageByGroupId = async (id) => {
    const messageByID = await models.messages.findOne({
        where: {
            id
        }
    });

    return messageByID
}

export const getMessages = async function (req, res) {
    const { params, query } = req

    let messages = []

    try {
        if (query.groupId) {
            const chatroomById = await getMessageByGroupId(query.groupId)
            messages.push(chatroomById)
        } else {
            const allMessages = await models.messages.findAll();
            messages = allMessages;
        }
    } catch (error) {
        console.log({ error })
    }

    return res.json({ messages })
}

export const createMessage = async (req, res) => {
    try {
        const newMessage = await models.messages.create(req.body)
        res.json(newMessage.toJSON())
    } catch (error) {
        console.log({ error })
        notFound(res)
    }
}

export default getMessages
