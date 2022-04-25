import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private _energyType: EnergyType;
  private static _countEnergy = 0;

  constructor(name: string) {
    super(name);

    this._energyType = 'stamina';
    Warrior._countEnergy += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior._countEnergy;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}