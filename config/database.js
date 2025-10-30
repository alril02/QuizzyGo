// backend/config/database.js
import { Sequelize } from 'sequelize'
import path from 'path'
import { fileURLToPath } from 'url'

// Konversi __dirname di ES module
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Path ke file SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, '../database.sqlite'),
  logging: console.log,
})

export default sequelize
