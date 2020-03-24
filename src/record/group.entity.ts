import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, BeforeInsert, AfterInsert, ManyToOne } from "typeorm";
import { Category } from "src/category/category.entity";


@Entity()
export class Group {
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
   total_category : number;
   @Column()
   total_price : number;

   @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP"})
   created: Date;

   // @BeforeInsert()
   // async beforeInsert() { 
   //    this.status = 1; 
   // }

   // @AfterInsert()
   // async afterInsert(group : Group){
   //    console.log(group)
   // }
   /**
    * {
	"group" : {
		"total_category" : 2,
		"category" :  {
				"id" : 3
			},
		"total_price": 2,	
		"status":1
         }
   }
    */
}