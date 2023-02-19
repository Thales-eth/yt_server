const { verifyToken } = require('../utils/jwt.util')

const validateToken = (req, res, next) => {

    const { authorization } = req.headers

    if (authorization) {
        const token = authorization.substring(7)
        console.log("ESTO ES LO QUE DEVUELVE EL VERIFY TOKEN ===>", verifyToken(token))
        const { sub: id, email } = verifyToken(token)
        req.user = { id, email }
    }

    else {
        res.sendStatus(401)
        return
    }

    next()
}

module.exports = { validateToken }