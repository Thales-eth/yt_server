const User = require("../models/User.model")

const getUsers = (req, res, next) => {
    User
        .find()
        .sort({ createdAt: -1 })
        .lean()
        .then(users => {
            res.status(200).json(users)
        })
        .catch(err => res.status(500).json({ error: err.message }))
}

const getLoggedUser = (req, res, next) => {
    const { id } = req.user

    User
        .findById(id)
        .select("-createdAt -updatedAt -__v")
        .then(user => {
            res.status(200).json(user)
        })
        .catch(err => res.status(500).json({ error: err.message }))
}

const deleteUser = (req, res, next) => {
    const { id } = req.params

    User
        .findByIdAndDelete(id)
        .then(response => res.status(200).json(response))
        .catch(err => res.status(500).json({ error: err.message }))
}


module.exports = { getUsers, getLoggedUser, deleteUser }