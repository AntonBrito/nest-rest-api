import { Controller, Get, Post, Put, Delete, Body, Req, Res } from '@nestjs/common';
import { CreateLogDto } from './dto/create-divelogs-dto';
import { Request, Response } from 'express';

@Controller('dives')
export class DivesController {
  @Get()
  findAll(@Req() req: Request, @Res() res: Response): string {
    return 'Get all logs';
  }

  @Post()
  create(@Body() createLogDto: CreateLogDto): string {
    return `Name: ${createLogDto.name} Desc: ${createLogDto.location}`;
  }

  @Put()
  edit(): string {
    return '';
  }

  @Delete()
  delete(): string {
    return '';
  }
}


