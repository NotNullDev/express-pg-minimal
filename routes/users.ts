import { Router } from "express";
import { db } from "../db/db";
export const userRouter = Router();

export type User = {
    id: number;
    name: string;
}

userRouter.get("/",  async (req,res) => {
    const users = await db.selectFrom("User").selectAll().execute()
    return res.json(users);
})

userRouter.post("/", async (req,res) => {
    // TODO: zod validation
    const name = req.body.name;

    if (!name) {
        res.status(400).json({
            error: "name is required parameter"
        })
        return;
    }

    const userID = db.insertInto("User").values([
        {
            name: name,
        }
    ]).returning("User.id").execute()

    res.json({
        userID
    })
})