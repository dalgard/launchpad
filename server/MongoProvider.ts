import { MongoClient, Db, Collection } from 'mongodb';
import { Pad } from './types';

export default class MongoProvider {
  //public for testing
  public mongodb: Promise<Db>;

  constructor(mongoUrl: string) {
    this.mongodb = MongoClient.connect(mongoUrl);
  }

  async pads(): Promise<Collection<Pad>> {
    return (await this.mongodb).collection('Pads');
  }
}
