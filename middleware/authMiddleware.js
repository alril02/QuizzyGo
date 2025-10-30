import jwt from 'jsonwebtoken'

const SECRET_KEY = 'rahasiaSuperAman' // Harus sama dengan yang di auth.js

// ✅ Verifikasi token
export const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (!token) {
    return res.status(401).json({ message: 'Token tidak ditemukan. Akses ditolak.' })
    }

    try {
    const decoded = jwt.verify(token, SECRET_KEY)
    req.user = decoded // Simpan data user di req.user
    next()
    } catch (err) {
    return res.status(403).json({ message: 'Token tidak valid atau kedaluwarsa.' })
    }
}

// ✅ Khusus Admin
export const isAdmin = (req, res, next) => {
    if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Akses khusus admin.' })
    }
    next()
}
