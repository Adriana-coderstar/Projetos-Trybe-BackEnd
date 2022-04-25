import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints: number;
  static _countPointsRace = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);

    this._maxLifePoints = 60;
    Halfling._countPointsRace += 1;
  }

  static createdRacesInstances(): number {
    return Halfling._countPointsRace;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}