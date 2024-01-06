const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Language extends Model { }

Language.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    hours: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    language: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'language',
  }
);

module.exports = Language;