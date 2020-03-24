import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, AfterInsert, ManyToOne } from "typeorm";
import { Category } from "src/category/category.entity";


@Entity()
export class Unit {
   @PrimaryGeneratedColumn()
   id : number;

   @ManyToOne(type => Category,{eager : true})
   @JoinColumn()
   category : Category;

   @Column()
   status : number;
   @Column()
   price : number;

   @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP"})
   created: Date;

   // @Column()
   // async beforeInsert() { 
   //    this.status = 1; 
   // }
   // @AfterInsert()
   // async afterInsert(unit : Unit){
   //    console.log(unit)
   // }
   /**
    * {
      "unit" : {
         "price" : 2,
         "category" :  {
               "id" : 3
            },
         "status":1
         }
   }
    */
}