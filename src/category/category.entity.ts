import {Entity, PrimaryGeneratedColumn, Column, BeforeInsert, AfterInsert} from 'typeorm';
@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    image: string;
    @Column()
    name: string;
    @Column()
    status: number;
    @Column({nullable : true})
    price: number;
    @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP"})
    createdAt: Date;

    // @BeforeInsert()
    // async beforeInsert()  {
    //     this.status = 1;
    // }

    // @AfterInsert()
    // async afterInsert(category:Category) {
    //     console.log(category)
    // }
}