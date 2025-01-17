import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Recipe {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    ingredients: string;

    @Column()
    description: string;

    @Column()
    instructions: string;

}