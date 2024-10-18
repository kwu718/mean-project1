import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm"
import { Team } from "./Team"

@Entity()
export class Coach {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column({nullable: true})
    teamId: number
    
    @OneToOne(() => Team, (team) => team.coach, {eager: true})
    team: Team
}
