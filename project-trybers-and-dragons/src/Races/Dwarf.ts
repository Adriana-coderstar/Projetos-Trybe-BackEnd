import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints: number;
  static _countPointsRace = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    
    this._maxLifePoints = 80;
    Dwarf._countPointsRace += 1;
  }

  static createdRacesInstances(): number {
    return Dwarf._countPointsRace;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}