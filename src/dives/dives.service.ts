import { Injectable } from '@nestjs/common';
import { Dive } from './interfaces/dive.interface';

@Injectable()
export class DivesService {
  private readonly dive: Dive[] = [
    {
      id: "5938395976",
      name: "John Duatez",
      location: "KeyWest",
      depth: 10,
    }
  ]
}
