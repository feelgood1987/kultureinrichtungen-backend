import { Body, Controller, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { IKultureinrichtung } from 'src/interfaces';
import { EditorsService } from './editors.service';

@ApiTags('Editors Controller')
@Controller({
  path: 'editors',
  version: '1',
})
export class EditorsController {
  constructor(private readonly editorService: EditorsService) {}

  @Post('/create')
  public async createKultureinrichtungenAsync(
    @Body() body: IKultureinrichtung,
  ) {
    return this.editorService.createKultureinrichtungenAsync(body);
  }

  @Patch('/edit/:_id')
  public async editKultureinrichtungenAsync(
    @Param('id') _id: string,
    @Body() body: IKultureinrichtung,
  ) {
    return this.editorService.editKultureinrichtungenAsync({
      ...body,
      _id,
    });
  }

  @Post('/delete/:_id')
  public async deleteKultureinrichtungenAsync(@Param('_id') _id: string) {
    return this.editorService.deleteKultureinrichtungenAsync(_id);
  }
}
