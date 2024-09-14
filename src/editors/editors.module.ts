import { Module } from '@nestjs/common';
import { EditorsService } from './editors.service';
import { EditorsController } from './editors.controller';
import { DatabaseModule, DatabaseService } from 'src/database';

@Module({
  imports: [DatabaseModule],
  controllers: [EditorsController],
  providers: [EditorsService, DatabaseService],
})
export class EditorsModule {}
