import { Module } from '@nestjs/common';
import { DivesController } from './dives.controller';
import { DivesService } from './dives.service';

@Module({
  imports: [],
  controllers: [DivesController],
  providers: [DivesService],
})
export class DivesModule {}
