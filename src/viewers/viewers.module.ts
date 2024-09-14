import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database';
import { ViewersController } from './viewers.controller';
import { ViewersService } from './viewers.service';

@Module({
  imports: [DatabaseModule],
  controllers: [ViewersController],
  providers: [ViewersService],
})
export class ViewersModule {}
