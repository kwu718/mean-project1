const express = require('express');
const router = express.Router();
import { Player } from "../entity/Player";
import { AppDataSource } from "../data-source"
import { IsNull } from "typeorm";


router.get('/', async(req, res) => {

    if(req.query.team){
        if(req.query.team === 'null')
            res.send(await AppDataSource.getRepository(Player).findBy({
            teamId: IsNull()
        }))
        else{
            let response = await AppDataSource.getRepository(Player).findBy({
                teamId: req.query.team
            })
            if(response)
                res.status(200).send(response);
            else
                res.status(404).send(`Player ID: ${req.query.team} not found!`)
        }
    }
    else{
        let response = await AppDataSource.getRepository(Player).find()
        if(response)
            res.status(200).send(response);
        else
            res.status(404).send('No Players Found!')
    }
})

router.get('/:id', async(req, res) => {
    let response = await AppDataSource.getRepository(Player).findOneBy({
        id: req.params.id
    })
    if(response)
        res.status(200).send(response);
    else
        res.status(404).send(`Player ID: ${req.params.id} not found!`)
})

router.post('/', async(req, res) => {
    const player = await AppDataSource.getRepository(Player).create(req.body);
    await AppDataSource.getRepository(Player).save(player);
    res.send(player);
})
router.put('/:id', async(req, res) => {
    // const player = await AppDataSource.getRepository(Player).findOneBy({
    //     id: req.params.id,
    // })
    // AppDataSource.getRepository(Player).merge(player, req.body)
    // const results = await AppDataSource.getRepository(Player).save(player)
    // return res.send(results)

    const player = await AppDataSource.createQueryBuilder().update(Player).set({
        firstName: req.body.firstName, lastName: req.body.lastName, age: req.body.age,
        height_feet: req.body.height_feet,
        height_inch: req.body.height_inch,
        email: req.body.email,
        teamId: req.body.teamId,
}).where("id = :id", { id: req.params.id })
.execute();
res.send(player);
})

router.delete('/:id', async(req, res) => {

    let response = await AppDataSource.getRepository(Player).findOneBy({
        id: req.params.id
    })
    if(response){
        const results = await AppDataSource.getRepository(Player).delete(req.params.id)
        res.send(results)
    }
    else
        res.status(404).send(`Player ID: ${req.params.id} not found!`)
   
})

module.exports = router;