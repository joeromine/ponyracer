export class RaceModel {
  id!: number;
  name!: string;
  ponies!: Array<Ponies>;
  startInstant!: string;
}

class Ponies {
  id!: number;
  name!: string;
  color!: string;
}
