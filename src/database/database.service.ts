import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Kultureinrichtung, User } from './schema';
import { Model } from 'mongoose';
import { IKultureinrichtung } from 'src/interfaces';

@Injectable()
export class DatabaseService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    @InjectModel(Kultureinrichtung.name)
    private kultureinrichtungModel: Model<Kultureinrichtung>,
  ) {}
  public async getKultureinrichtungenAsync() {
    return this.kultureinrichtungModel.find(
      {},
      {
        location: 1,
        name: 1,
      },
    );
  }

  public async getKultureinrichtungByIdAsync(_id: string) {
    return this.kultureinrichtungModel.findById(_id);
  }

  public async createKultureinrichtungenAsync(
    kultureinrichtung: IKultureinrichtung,
  ) {
    return this.kultureinrichtungModel.create(kultureinrichtung);
  }

  public async editKultureinrichtungenAsync(
    kultureinrichtung: IKultureinrichtung,
  ) {
    return this.kultureinrichtungModel.findByIdAndUpdate(
      kultureinrichtung._id,
      kultureinrichtung,
      {
        upsert: true,
      },
    );
  }

  public async deleteKultureinrichtungenAsync(_id: string) {
    return this.kultureinrichtungModel.findByIdAndDelete(_id);
  }

  public async getUserByEmailAsync(email: string) {
    return this.userModel.findOne({ email });
  }
}
