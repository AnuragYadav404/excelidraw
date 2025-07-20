import express from "express";

const app = express();

app.post("/signup", (req, res) => {
    // do zod validation here
    res.json({
        message: "Sign up sucessfull",
        userID: "123123"
    })
})

app.post("/signin", (req, res) => {
    // do zod validation here
    res.json({
        message: "Sign in sucessfull",
        token: "123123"
    })
})

app.post("/create-room", (req, res) => {
    // do zod validation here
    res.json({
        message: "Room created",
        roomID: "123123"
    })
})

app.listen(3000, () => {
    console.log("HTTP server running on: http://localhost:3000")
})