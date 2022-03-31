import { Router } from "express"

const router = Router()

router.get('/ping', (req, res) => {
  res.json({ pong: true})
})

router.get('/random', (req, res) => {
  let randNumb: number = Math.floor(Math.random() * 10 )
  res.json({ number: randNumb })
})

router.get('/name/:name', (req, res) => {
  let name: string = req.params.name
  res.json({ name: `You Sent The Name ${name}`})
})

export default router