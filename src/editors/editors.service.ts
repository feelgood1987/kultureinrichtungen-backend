import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database';
import { IKultureinrichtung } from 'src/interfaces';

@Injectable()
export class EditorsService {
  constructor(private readonly databaseService: DatabaseService) {}

  public async createKultureinrichtungenAsync(data: IKultureinrichtung) {
    return await this.databaseService.createKultureinrichtungenAsync(data);
  }

  public async editKultureinrichtungenAsync(data: IKultureinrichtung) {
    return await this.databaseService.editKultureinrichtungenAsync(data);
  }

  public async deleteKultureinrichtungenAsync(_id: string) {
    return await this.databaseService.deleteKultureinrichtungenAsync(_id);
  }
}
