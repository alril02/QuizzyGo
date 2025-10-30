import express from 'express'
import cors from 'cors'
import sequelize from './config/database.js'
import { User, Score, Question } from './models/associations.js' // Import model dari file relasi
import scoresRoutes from './routes/scores.js'
import authRoutes from './routes/auth.js'
import questionRoute from './routes/question.js'

const app = express()
const PORT = 3000

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.use('/scores', scoresRoutes) // untuk /scores
app.use('/auth', authRoutes)     // untuk /register dan /login
app.use('/questions', questionRoute)

// Mulai server dan sync database
const startServer = async () => {
  try {
    await sequelize.authenticate()
    console.log('✅ Database connected.')

    // Sync seluruh model (User, Score, dll)
    await sequelize.sync() // gunakan { force: true } untuk reset, atau { alter: true } untuk update otomatis
    console.log('✅ Semua tabel disinkronkan.')

    // Mulai server
    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`)
    })
  } catch (error) {
    console.error('❌ Gagal koneksi ke database:', error)
  }
}

startServer()
