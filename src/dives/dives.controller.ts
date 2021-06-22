import { 
  Controller,
  Get,
  Post, 
  Put, 
  Delete, 
  Body, 
  Param 
} from '@nestjs/common';
import { CreateDiveDto } from './dto/create-dive-log-dto';
import { DivesService } from './dives.service';
import { Dive } from "./interfaces/dive.interface";

@Controller('dives')
export class DivesController {
  constructor(private readonly divesService: DivesService) {}
  @Get()
  findAll(): string {
    return 'Get all Logs';
  }

  @Get(':id')
  findOne(@Param('id') id): string {
    return `DiveLog ${id}`;
  }

  @Post()
  create(@Body() createDiveDto: CreateDiveDto): string {
    return `Name: ${createDiveDto.name} location: ${createDiveDto.location}`;
  }

  @Delete(':id')
  delete(@Param('id') id): string {
    return `Delete ${id}`;
  }

  @Put(':id')
  update(@Body() updateDiveDto: CreateDiveDto, @Param('id') id): string {
    return `Update ${id} - Name: ${updateDiveDto.name}`;
  }
}
