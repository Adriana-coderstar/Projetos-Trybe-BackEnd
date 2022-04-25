import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints: number;
  private static _countPointsRace = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);

    this._maxLifePoints = 99;
    Elf._countPointsRace += 1;
  }

  static createdRacesInstances(): number {
    return Elf._countPointsRace;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}