import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne } from "typeorm"
import { Player } from "./Player"
import { Coach } from "./Coach"

@Entity()
export class Team {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    teamName: string

    @Column()
    coachName: string

    @OneToMany(() => Player, (player) => {player.team})
    players: Player[]

    @OneToOne(() => Coach, (coach) => coach.team)
    coach: Coach

}
