import { Module } from '@nestjs/common';
import { EditorsController, EditorsModule, EditorsService } from './editors';
import { ViewersController, ViewersModule, ViewersService } from './viewers';
import { DatabaseModule } from './database';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    EditorsModule,
    ViewersModule,
  ],
  controllers: [EditorsController, ViewersController],
  providers: [EditorsService, ViewersService],
})
export class AppModule {}
