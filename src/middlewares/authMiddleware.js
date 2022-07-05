import { verifyToken } from "../services/authService.js";

export async function authMiddleware(req, res, next) {
    
    const authorization = (req.headers.authorization) || ("");
    const token = authorization.replace("Bearer ", "");
  
    if (!token) {
        throw res.sendStatus(401);
    }
  
    let user = null;
  
    try {

        user = await verifyToken(token);
        
    } catch {

        return res.sendStatus(401);

    }
  
    res.locals.user = user;
    
    next();

}