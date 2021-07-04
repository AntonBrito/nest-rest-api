import { Injectable } from '@nestjs/common';
import { Dive } from './interfaces/dive.interface';

@Injectable()
export class DivesService {
  private readonly dives: Dive[] = [
    {
      id: "5938395976",
      name: "John Duatez",
      location: "KeyWest",
      depth: 10,
    },
    {
      id: "4254657853",
      name: "Ally Brito",
      location: "Capeverde",
      depth: 25,
    },
  ];

  findAll(): Dive[] {
    return this.dives;
  }

  findOne(id: string): Dive {
    return this.dives.find(dive => dive.id === id);
  }
}
