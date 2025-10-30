import { DataTypes } from 'sequelize'
import sequelize from '../config/database.js'
import User from './user.js'

const Score = sequelize.define('Score', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  score: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
})


User.hasMany(Score, { foreignKey: 'userId', onDelete: 'CASCADE' })
Score.belongsTo(User, { foreignKey: 'userId' })

export default Score
