import { Controller, Get, Post } from '@nestjs/common';

@Controller('dives')
export class DivesController {
  @Get()
  findAll(): string {
    return 'Get all log'
  }

  @Post()
  create(): string  {
    return 'Create Divelogs'
  }
}
