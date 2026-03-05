// handle all authentication between the client and the server

import jwt from 'jsonwebtoken'

function authMiddleware (req, res, next) {
    const token = req.headers['authorization']

    if(!token){
        return res.status(401).json({message: 'No token found for the logged in user to fetch the todo list'})
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) =>{
        if (err) {
            return res.status(401).json({message : "Invalid Token"})
        }
        req.userId = decoded.id
        next()
    })
}

export default authMiddleware;