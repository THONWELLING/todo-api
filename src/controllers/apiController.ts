import { Request, Response } from "express"
import { Phrase } from "../models/Phrase"

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

export const createPhrase = async (req: Request, res: Response) => {
  let  author: string  = req.body.author
  let   txt: string  = req.body.txt
  let  location: string  = req.body.location


  let newPhrase = await Phrase.create({ author, txt, location })
  res.json({ id: newPhrase.id, author, txt, location })
}

export const phrasesList = async (req: Request, res: Response) => {
  let list = await Phrase.findAll()

  res.json({ list })
}

export const getPhrase = async (req: Request, res: Response) => {
  let { id } = req.params

  let phrase = await Phrase.findByPk(id)
  if(phrase) {
    res.json({ phrase })
  } else {
    res.json({ error: 'Phrase Not Found' })
  }
}