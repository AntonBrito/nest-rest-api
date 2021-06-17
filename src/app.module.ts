import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DivesController } from './dives/dives.controller';

@Module({
  imports: [],
  controllers: [AppController, DivesController],
  providers: [AppService],
})
export class AppModule {}
