import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, InsertResult } from 'typeorm';
import { RecordRepository } from './record.repository';
import { Record } from './record.entity';
import { UnitRepository } from './unit.reposity';
import { Unit } from './unit.entity';

@Injectable()
export class RecordService {
    
    @InjectRepository(Record)
    recordRepository: RecordRepository;
    
    @InjectRepository(Unit)
    unitRepository : UnitRepository;
   
    removeRecord = async (id: number) => {
        try {
            let record  = await this.recordRepository.findOne(id);
            record.status =0 ;
            return this.recordRepository.save(record);
        } catch (error) {
            return error;
        }
    }

    findAllRecord() : Promise<Record[]> {
        return this.recordRepository.find({order : {id : "DESC" , status : 1}});
    }
    findAllUnitService(start_date : string , end_date : string) :any {
        return this.recordRepository.queryBetweenDate(start_date,end_date);
    }
    findCurrentDateRecord () : any { 
        let myDate =new Date();
        myDate.setHours( myDate.getHours() + 7)
        console.log(myDate)
        return this.recordRepository.queryUnitRecordByCurrent(myDate.toISOString().split('T')[0]);
    }

    insertRecordService(record: Record) : Promise<InsertResult> {
        try{ 
            let myDate =new Date();
            myDate.setHours( myDate.getHours() + 7)
            record.created = myDate;
            record.total_price = record.category.price * record.service_amount;
            return this.recordRepository.insert(record);
        }catch(err){
            return null;
        }
        
       
    } 

    insertUnitService(unit:Unit) : Promise<InsertResult>  {
        return this.unitRepository.insert(unit);
    }

}
