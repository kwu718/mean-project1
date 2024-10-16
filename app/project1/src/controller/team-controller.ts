const express = require('express');
const router = express.Router();
import { Team } from "../entity/Team";
import { AppDataSource } from "../data-source"

router.get('/', async(req, res) => {
    res.send(await AppDataSource.getRepository(Team).find())
})

router.get('/:id', async(req, res) => {
    let response = await AppDataSource.getRepository(Team).findOneBy({
        id: req.params.id
    })
    if(response)
        res.status(200).send(response);
    else
        res.status(404).send(`Team with ID: ${req.params.id} not found!`)
})

router.post('/', async(req, res) => {
    const team = await AppDataSource.getRepository(Team).create(req.body);
    await AppDataSource.getRepository(Team).save(team);
    res.send(team);
})

router.put('/:id', async(req, res) => {
    const team = await AppDataSource.getRepository(Team).findOneBy({
        id: req.params.id,
    })
    AppDataSource.getRepository(Team).merge(team, req.body)
    const results = await AppDataSource.getRepository(Team).save(team)
    return res.send(results)
})
router.delete('/:id', async(req, res) => {
    const results = await AppDataSource.getRepository(Team).delete(req.params.id)
    res.send(results)
})
module.exports = router;