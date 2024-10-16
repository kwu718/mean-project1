const express = require('express');
const router = express.Router();
import { Player } from "../entity/Player";
import { AppDataSource } from "../data-source"


router.get('/', async(req, res) => {
    res.send(await AppDataSource.getRepository(Player).find())
})

router.get('/:id', async(req, res) => {
    let response = await AppDataSource.getRepository(Player).findOneBy({
        id: req.params.id
    })
    if(response)
        res.status(200).send(response);
    else
        res.status(404).send(`Player with ${req.params.id} not found!`)
})

router.post('/', async(req, res) => {
    const player = await AppDataSource.getRepository(Player).create(req.body);
    await AppDataSource.getRepository(Player).save(player);
    res.send(player);
})
router.put('/:id', async(req, res) => {
    const player = await AppDataSource.getRepository(Player).findOneBy({
        id: req.params.id,
    })
    AppDataSource.getRepository(Player).merge(player, req.body)
    const results = await AppDataSource.getRepository(Player).save(player)
    return res.send(results)
})
router.delete('/:id', async(req, res) => {
    const results = await AppDataSource.getRepository(Player).delete(req.params.id)
    res.send(results)
})

module.exports = router;