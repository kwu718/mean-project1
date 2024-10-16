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

    @OneToOne(() => Team, (team) => team.coach)
    team: Team
}
