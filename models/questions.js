import { DataTypes } from 'sequelize'
import sequelize from '../config/database.js'

const Question = sequelize.define('Question', {
    question: {
    type: DataTypes.STRING,
    allowNull: false
    },
    choice1: {
    type: DataTypes.STRING,
    allowNull: false
    },
    choice2: {
    type: DataTypes.STRING,
    allowNull: false
    },
    choice3: {
    type: DataTypes.STRING,
    allowNull: false
    },
    choice4: {
    type: DataTypes.STRING,
    allowNull: false
    },
    answer: {
    type: DataTypes.STRING,
    allowNull: false
    }
})

export default Question
