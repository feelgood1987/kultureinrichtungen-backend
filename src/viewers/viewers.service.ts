import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database';

@Injectable()
export class ViewersService {
  constructor(private readonly databaseService: DatabaseService) {}

  public async getKultureinrichtungByIdAsync(_id: string) {
    return this.databaseService.getKultureinrichtungByIdAsync(_id);
  }
  public async getKultureinrichtungenAsync() {
    return this.databaseService.getKultureinrichtungenAsync();
  }
}
