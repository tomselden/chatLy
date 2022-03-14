
const models = require('../models')
import notFound from "./notFound"

const getUsersById = async (id) => {
    const usersById = await models.users.findOne({
        where: {
            id
        }
    });

    return usersById
}

export const createUser = async (req, res) => {
    try {
        const newUser = await models.users.create(req.body)
        res.json(newUser.toJSON())
    } catch (error) {
        console.log({ error })
        notFound(res)
    }
}

export const updateUser = async (req, res) => {
    const { userId, ...changes } = req.body;

    if (!chatRoomId) {
        return notFound(res)
    }

    try {
        const user = await getUsersById(userId)
        user.update(changes)
        const updateUser = await user.save()
        res.json(updateUser.toJSON())
    } catch (error) {
        console.log({ error })
        notFound(res)
    }
}
