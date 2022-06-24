import express, {Request, Response} from 'express'
import {Server} from 'http'

const server = express()

server.get('/',(req:Request,res:Response) =>{

    res.send("AHHHHHHH")

})

server.listen(3000)
