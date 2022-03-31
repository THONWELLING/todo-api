import { Request, Response } from "express"
import { Phrase } from "../models/phrase"

export const ping = (req: Request, res: Response) => {
  res.json({ pong: true })
}

export const random = (req: Request, res: Response) => {
  let randomNumb: number = Math.floor(Math.random() * 10 )

  res.json({ randomNumb })

}

export const name = (req: Request, res: Response) => {
  let name: string = req.params.name
  res.json({ name: `You Sent The Name ${name}`})
}