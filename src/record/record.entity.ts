import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, BeforeInsert, AfterInsert, ManyToOne } from "typeorm";
import { Category } from "src/category/category.entity";


@Entity()
export class Record {
   @PrimaryGeneratedColumn()
   id : number;
   /**
    * Will not query category because fetch = lazy
    */
   @ManyToOne(type => Category)
   @JoinColumn()
   category : Category;
    @Column()
   status : number;
   @Column()
   service_amount : number;
   @Column()
   total_price : number;

   @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP"})
   created: Date;


}