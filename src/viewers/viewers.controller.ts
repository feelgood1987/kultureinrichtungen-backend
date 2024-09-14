import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ViewersService } from './viewers.service';

@ApiTags('Viewers Controller')
@Controller({
  path: 'viewers',
  version: '1',
})
export class ViewersController {
  constructor(private readonly viewerService: ViewersService) {}

  @Get('/kultureinrichtungen')
  public async getKultureinrichtungenAsync() {
    return this.viewerService.getKultureinrichtungenAsync();
  }

  @Get('/kultureinrichtung/:_id')
  public async getKultureinrichtungByIdAsync(@Param('_id') _id: string) {
    return this.viewerService.getKultureinrichtungByIdAsync(_id);
  }
}
