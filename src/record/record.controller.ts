import { Controller, Inject, Get, Post, Body } from '@nestjs/common';
import { json } from 'express';
import { RecordService } from './record.service';
import { Group } from './group.entity';
import { Unit } from './unit.entity';

@Controller('record')
export class RecordController {
    @Inject()
    private recordService: RecordService;
    
    /**
     * GROUP SERVICE
     */
    @Get("/group")
    findGroup()  {
        return this.recordService.findAllGroup();
    }

    @Post("/group")
    insertGroup (@Body("group") group: Group) {
        group.status = 1;
        return this.recordService.insertGroupService(group);
    }
    /**
     *  UNIT SERVICE
     */
    @Get("/unit")
    index()  {
        return this.recordService.findAllUnitService();
    }

    @Post("/unit")
    findUnit (@Body("unit") unit : Unit) {
        unit.status = 1;
        return this.recordService.insertUnitService(unit);
    }
}
