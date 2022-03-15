
const models = require('../models')
import notFound from "./notFound"

const getOneUserBy = (query) => models.users.findOne(query)

const getUsersById = (id) => getOneUserBy({
    where: {
        id
    }
})

const getUsersByEmail = (email) => getOneUserBy({
    where: {
        email
    }
})

export const getUserBy = async (req, res) => {
    const { id, email } = req.query;
    let user = null

    try {
        if (id) {
            user = await getUsersById(id)
        }
        if (email) {
            user = await getUsersByEmail(email)

        }
    } catch (e) {
        console.log({ e })
        // not sure what to do here
    }

    res.json({ user })
}

export const createUser = async (req, res) => {
    try {
        const newUser = await models.users.create(req.body)
        res.json({ user: newUser.toJSON() })
    } catch (error) {
        console.log({ error })
        res.status(400).json({ user: null, error })
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
