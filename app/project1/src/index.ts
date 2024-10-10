import { AppDataSource } from "./data-source"
import { Player } from "./entity/Player"

AppDataSource.initialize().then(async () => {

    console.log("Inserting a new user into the database...")
    const player = new Player()
    player.firstName = "Timber"
    player.lastName = "Saw"
    player.age = 25
    await AppDataSource.manager.save(player)
    console.log("Saved a new user with id: " + player.id)

    console.log("Loading users from the database...")
    const users = await AppDataSource.manager.find(Player)
    console.log("Loaded users: ", users)

    console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))
