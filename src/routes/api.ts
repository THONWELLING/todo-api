import { Router } from "express"
import * as ApiController from "../controllers/apiController"

const router = Router()

router.get('/ping', ApiController.ping)
router.get('/random', ApiController.random)
router.get('/name/:name', ApiController.name)

router.post('/Phrases', ApiController.createPhrase)
router.get('/Phrases', ApiController.phrasesList)
router.get('/Phrase/:id', ApiController.getPhrase)
router.put('/Phrase/:id', ApiController.updatePhrase)
router.delete('/Phrase/:id', ApiController.deletePhrase)



export default router