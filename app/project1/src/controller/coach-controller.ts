const express = require('express');
const router = express.Router();
import { Coach } from "../entity/Coach";
import { AppDataSource } from "../data-source"

router.get('/', async(req, res) => {
    res.send(await AppDataSource.getRepository(Coach).find())
})

router.get('/:id', async(req, res) => {
    let response = await AppDataSource.getRepository(Coach).findOneBy({
        id: req.params.id
    })
    if(response)
        res.status(200).send(response);
    else
        res.status(404).send(`Team with ID: ${req.params.id} not found!`)
})

router.post('/', async(req, res) => {
    const coach = await AppDataSource.getRepository(Coach).create(req.body);
    await AppDataSource.getRepository(Coach).save(coach);
    res.send(coach);
})

router.put('/:id', async(req, res) => {
    const coach = await AppDataSource.getRepository(Coach).findOneBy({
        id: req.params.id,
    })
    AppDataSource.getRepository(Coach).merge(coach, req.body)
    const results = await AppDataSource.getRepository(Coach).save(coach)
    return res.send(results)
})
router.delete('/:id', async(req, res) => {
    const results = await AppDataSource.getRepository(Coach).delete(req.params.id)
    res.send(results)
})
module.exports = router;