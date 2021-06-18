import { Controller, Get, Post, Put, Delete, Body } from '@nestjs/common';
import { CreateLogDto } from './dto/create-dive-log-dto';

@Controller('dives')
export class DivesController {
  @Get()
  findAll(): string {
    return 'Get all Logs';
  }

  @Post()
  create(@Body() createLogDto: CreateLogDto): string {
    return `Name: ${createLogDto.name} location: ${createLogDto.location}`;
  }

  // @Put()
  // edit(): string {
  //   return '';
  // }

  // @Delete()
  // delete(): string {
  //   return '';
  // }
}
