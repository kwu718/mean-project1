import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

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

    @Column()
    phone: number

}
