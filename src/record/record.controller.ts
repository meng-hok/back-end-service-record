import { Controller, Inject, Get, Post, Body,Request, Query, Put } from '@nestjs/common';
import { json } from 'express';
import { RecordService } from './record.service';
import { Record } from './record.entity';
import { Unit } from './unit.entity';

@Controller('record')
export class RecordController {
    @Inject()
    private recordService: RecordService;
    
    /**
     * GROUP SERVICE
     */
    @Get("/get")
    findGroup()  {
        return this.recordService.findAllRecord();
    }

    @Post("/post")
    insertGroup (@Body() record: Record ) {
       
        record.status = 1;
        return this.recordService.insertRecordService(record);
    }

    @Put("/remove")
    removeRecord(@Query("id")id : number){
        return this.recordService.removeRecord(id);
    }
    /**
     *  UNIT SERVICE
     */
    @Get("/report")
    index(@Query("start") start_date , @Query("end") date_end )  {
        // console.log(body.start_date )
        
        return this.recordService.findAllUnitService(start_date,date_end);
    }


    @Post("/unit")
    findUnit (@Body("unit") unit : Unit) {
        unit.status = 1;
        return this.recordService.insertUnitService(unit);
    }

    @Get("/today")
    findTodayRecord () {
        return this.recordService.findCurrentDateRecord();
    }
}
