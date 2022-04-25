import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private _energyType: EnergyType;
  private static _countEnergy = 0;

  constructor(name: string) {
    super(name);

    this._energyType = 'stamina';
    Ranger._countEnergy += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger._countEnergy;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}