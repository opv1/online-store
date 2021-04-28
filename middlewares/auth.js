import dotenv from 'dotenv'
import jsonwebtoken from 'jsonwebtoken'

dotenv.config()

export default function (req, res, next) {
  if (req.method === 'OPTIONS') {
    next()
  }

  try {
    const token = req.headers.authorization.split(' ')[1]

    if (!token) {
      return res.status(401).json('no auth')
    }

    const decoded = jsonwebtoken.verify(token, process.env.SECRET_KEY)

    req.user = decoded

    next()
  } catch (err) {
    res.status(401).json('no auth')
  }
}
