import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateLogDto } from './dto/create-dive-log-dto';

@Controller('dives')
export class DivesController {
  @Get()
  findAll(): string {
    return 'Get all Logs';
  }

  @Get(':id')
  findOne(@Param('id') id): string {
    return `DiveLog ${id}`;
  }

  @Post()
  create(@Body() createLogDto: CreateLogDto): string {
    return `Name: ${createLogDto.name} location: ${createLogDto.location}`;
  }

  @Delete(':id')
  delete(@Param('id') id): string {
    return `Delete ${id}`;
  }

  @Put(':id')
  update(@Body() updateLogDto: CreateLogDto, @Param('id') id): string {
    return `Update ${id} - Name: ${updateLogDto.name}`;
  }
}
