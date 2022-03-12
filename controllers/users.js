const models = require('../db/models')
import notFound from "./notFound"

const users = async (id) => {
    const usersById = await models.users.findOne({
        where: {
            id
        }
    });

    return usersById
}

export const getUsers = async function (req, res) {
    const { params, query } = req

    let users = []

    try {
        if (query.groupId) {
            const usersById = await getUsersById(query.groupId)
            chatRooms.push(chatroomById)
        } else if (query.groupName) {
            const userByName = await models.users.findAll({
                where: {
                    name: query.groupName
                }
            });
            users.push(usersByName)
        } else {
            const allChats = await models.users.findAll();
            users = allUsers;
        }
    } catch (error) {
        console.log({ error })
    }

    return res.json({ users})
}

export const createUsers = async (req, res) => {
    try {
        const newRoom = await models.users.create(req.body)
        res.json(newUser.toJSON())
    } catch (error) {
        console.log({ error })
        notFound(res)
    }
}

export const updateUsers = async (req, res) => {
    const { chatRoomId } = req.query

    if (!chatRoomId) {
        return notFound(res)
    }

    try {
        const room = await getUsersById(chatRoomId)
        room.update(req.body)
        const updateRoom = await room.save()
        res.json(updateRoom.toJSON())
    } catch (error) {
        console.log({ error })
        notFound(res)
    }
}

export const deleteUsers= async (req, res) => {
    const { chatRoomId } = req.query

    try {
        const room = await getUsersById(chatRoomId)
        await room.destroy()
        res.status(200).send('deleted')
    } catch (error) {
        console.log({ error })
        notFound(res)
    }
}

export default users
