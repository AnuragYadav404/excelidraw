import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export function authMiddleware(req: Request, res:Response, next: NextFunction) {
    // here we check whether the user provided credentials are correct or not
    const token = req.headers["authorization"];
    if(!token) {
        res.status(403).json({
            message: "Un-authenticated request. No token found"
        })
        return
    }
    const decoded = jwt.verify(token as string, "JWT_SECRET")
    if(decoded) {
        // here we can also check if payload is of type Jwt.payload or string
        if (typeof decoded === "string") {
            res.status(403).json({
                message: "Invalid token credential"
            })
            return;    
        }
        req.userID = decoded.userID;
        next()
    }else {
        res.status(403).json({
            message: "Un-authenticated request. Cannot Decode"
        })
        return
    }
}