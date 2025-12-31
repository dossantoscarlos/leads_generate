import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LeadsService } from './leads.service';
import { Lead } from './entities/lead.entity';

@Controller('leads')
export class LeadsController {
  constructor(private readonly leadsService: LeadsService) { }

  @Post()
  create(@Body() createLead: Lead) {
    return this.leadsService.createLead(createLead);
  }

  @Get()
  findAll() {
    return this.leadsService.leads({});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const idLead = +id;
    return this.leadsService.lead({ id: idLead });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLead: Lead) {
    const idLead = +id;
    return this.leadsService.updateLead({
      where: { id: idLead },
      data: updateLead,
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.leadsService.deleteLead({ id: +id });
  }
}
