import express from "express";
import {CreateUserSchema, CreateRoomSchema, SignInSchema} from "@repo/common/types"

const app = express();

app.post("/signup", (req, res) => {
    // do zod validation here

    const data = CreateUserSchema.safeParse(req.body)

    if(!data.success) {
        res.json({
            message: "Bad Request Credentials"
        })
        return
    }

    res.json({
        message: "Sign up sucessfull",
        userID: "123123"
    })
})

app.post("/signin", (req, res) => {
    // do zod validation here

    const data = SignInSchema.safeParse(req.body)

    if(!data.success) {
        res.json({
            message: "Bad Request Credentials"
        })
        return
    }
    res.json({
        message: "Sign in sucessfull",
        token: "123123"
    })
})

app.post("/create-room", (req, res) => {
    // need to add authMiddleware here
    // do zod validation here
    const data = CreateRoomSchema.safeParse(req.body)
    if(!data.success) {
        res.json({
            message: "Bad Request Credentials"
        })
        return
    }

    res.json({
        message: "Room created",
        roomID: "123123"
    })
})

app.listen(3000, () => {
    console.log("HTTP server running on: http://localhost:3000")
})