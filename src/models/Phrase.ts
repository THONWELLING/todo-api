import { Model, DataTypes } from "sequelize"
import { sequelize } from "../instances/pg"



export interface PhraseInstance extends Model {
  id: number
  author: string
  txt: string
  location: string
}

export const Phrase = sequelize.define<PhraseInstance>('Phrase', {
  author: {
    type: DataTypes.STRING
  },
  txt: {
    type: DataTypes.STRING
  },
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER
  },
  location: {
    type: DataTypes.STRING
  }
},
{
  tableName: "phrases",
  timestamps: false
})