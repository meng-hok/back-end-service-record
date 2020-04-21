import { Record } from "./record.entity";
import { Repository, EntityRepository, EntityManager,getConnection, Any } from "typeorm";

@EntityRepository(Record)
export class RecordRepository extends Repository<Record> {
    
    // private entityManager : EntityManager;

    /**
     * name
     */// eslint-disable-next-line @typescript-eslint/camelcase
    public queryBetweenDate : any = async(start_date : string , end_date : string)  =>  {
       
        const object = await getConnection()
            .query(`SELECT r."categoryId",c."name",sum(service_amount) as service_amount , sum(total_price) as total_price  
                    FROM "record" as r LEFT Join "category" c on r."categoryId" = c."id" 
                    where r."status" = 1 AND r."created" BETWEEN $1 AND $2  GROUP BY r."categoryId",c."name" `,
                    // eslint-disable-next-line @typescript-eslint/camelcase
                    [ start_date,end_date ])
                      
        return object;
    }

    public queryUnitRecordByCurrent : any = async(date : string ) =>{
        const object = await getConnection()
            .query(`SELECT r.id, c.id as category_id, c.name as category_name, r.service_amount 
            FROM "record" as r JOIN "category" as c on r."categoryId" = c."id" 
            WHERE r.created > $1 AND r.status = 1`,[date]);
        return object;    
    }

}