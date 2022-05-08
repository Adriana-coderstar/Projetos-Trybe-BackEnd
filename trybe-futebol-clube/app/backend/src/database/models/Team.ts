import { DataTypes, Model } from 'sequelize';
import db from '.';
// import OtherModel from './OtherModel';

class Team extends Model {
  public id: number;
  public teamName: string;
}

Team.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  teamName: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  underscored: true,
  sequelize: db,
  timestamps: false,
  tableName: 'teams',
});

export default Team;