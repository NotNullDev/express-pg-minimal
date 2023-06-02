
import express, { ErrorRequestHandler, json } from "express";

process.on('uncaughtException', (err, origin) => {
	console.error(origin, err);
});


import { userRouter } from "./routes/users";
const app = express();

app.use(json())

app.use("/users", userRouter)

app.get("/error", () => {
    throw new Error("OMG!")
})

app.get("/", (req,res) => {
    res.json({
        "status": "ready!"
    })
})

// must be after endpoint in order to work
app.use(((err, req, res, next) => {
    console.log("handling error :)")
    return res.status(500).send({
        error: "Internal server error"
    })
}) satisfies ErrorRequestHandler)


app.listen("7777", () => {
    console.log("server started on port 7777")
})