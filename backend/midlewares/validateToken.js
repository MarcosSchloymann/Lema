import jwt from 'jsonwebtoken'
import { TOKEN_SECRET } from '../config.js'

export const authRequire = (req, res, next) => {
    const {token}= req.cookies
    if(!token)
        return res.status(401).json({
    message:'no autorizado'})

    jwt.verify(token, TOKEN_SECRET, (err, user)=>{
        if(err) return res.status(401).json({message:'token inválido'});
        req.user=user  
    })
    next()
}

