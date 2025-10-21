import User from '../models/user.js'

const isAdmin = async (req, res, next) => {
    const { userId } = req.body

    if (!userId) {
    return res.status(401).json({ message: 'User ID tidak ditemukan dalam request.' })
    }

    try {
    const user = await User.findByPk(userId)

    if (!user || user.role !== 'admin') {
        return res.status(403).json({ message: 'Akses ditolak. Hanya admin yang diperbolehkan.' })
    }

    next() // Lanjut ke route berikutnya
    } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Kesalahan server saat otorisasi admin.' })
    }
}

export default isAdmin
