// models/associations.js
import User from './user.js'
import Score from './score.js'
import Question from './questions.js'

// Relasi User -> Score
User.hasMany(Score, { foreignKey: 'userId', onDelete: 'CASCADE' })
Score.belongsTo(User, { foreignKey: 'userId' })

// Export
export { User, Score, Question }
