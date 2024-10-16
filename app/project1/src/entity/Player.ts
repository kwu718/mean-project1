import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm"
import { Team } from "./Team"

@Entity()
export class Player {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number

    @Column()
    height_feet: number

    @Column()
    height_inch: number

    @Column()
    email: string

    @ManyToOne(() => Team, {nullable: true, eager: true})
    team: Team
}
