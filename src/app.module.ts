import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DivesController } from './dives/dives.controller';
import { DivesService } from './dives/dives.service';

@Module({
  imports: [],
  controllers: [AppController, DivesController],
  providers: [AppService, DivesService],
})
export class AppModule {}
