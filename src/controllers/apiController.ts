import { Request, Response } from "express"
import { Phrase } from "../models/Phrase"


  // Criando rota de teste 
export const ping = (req: Request, res: Response) => {
  res.json({ pong: true })
}
 // Retornando um número aleatório
export const random = (req: Request, res: Response) => {
  let randomNumb: number = Math.floor(Math.random() * 10 )

  res.json({ randomNumb })

}
 //Pegando nome nos parametos (Url)
export const name = (req: Request, res: Response) => {
  let name: string = req.params.name
  res.json({ name: `You Sent The Name ${name}`})
}
  //Criando uma nova frase
export const createPhrase = async (req: Request, res: Response) => {
  let  author: string  = req.body.author
  let   txt: string  = req.body.txt
  let  location: string  = req.body.location

  let newPhrase = await Phrase.create({ author, txt, location })
  res.json({ id: newPhrase.id, author, txt, location })
}
  // pegando todas as frases
export const phrasesList = async (req: Request, res: Response) => {
  let list = await Phrase.findAll()

  res.json({ list })
}
  // pegando uma frase pelo (id)
export const getPhrase = async (req: Request, res: Response) => {
  let { id } = req.params       //pegando o id

  let phrase = await Phrase.findByPk(id)      // buscando pelo id
  if(phrase) {
    res.json({ phrase })
  } else {
    res.json({ error: 'Phrase Not Found' })
  }
}

export const updatePhrase = async (req: Request, res: Response) => {
  let { id } = req.params
  let { author, txt, location } = req.body

  let phrase = await Phrase.findByPk(id)
  if(phrase) {
    phrase.author = author
    phrase.txt = txt
    phrase.location = location

    await phrase.save()

    res.json({ phrase })
  } else {
    res.json({ error: 'Phrase Does Not Exist' })
  }
}

export const deletePhrase = async (req: Request, res: Response) => {
  let { id } = req.params
  
  await Phrase.destroy({ where: { id }})

  res.json({})
}