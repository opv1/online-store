import dotenv from 'dotenv'
import bcrypt from 'bcrypt'
import jsonwebtoken from 'jsonwebtoken'
import ApiError from '../error/ApiError.js'
import { User, Basket } from '../models/models.js'

dotenv.config()

const generateToken = (id, email, role) => {
  return jsonwebtoken.sign({ id, email, role }, process.env.SECRET_KEY, {
    expiresIn: '1h',
  })
}

const registration = async (req, res, next) => {
  try {
    const { email, password, role } = req.body

    if (!email || !password) {
      next(ApiError.badRequest(404, 'Uncorrect data!'))
    }

    const candidate = await User.findOne({ where: { email } })

    if (candidate) {
      next(ApiError.badRequest(404, 'exsisting user!'))
    }

    const hashedPassword = await bcrypt.hash(password, 8)

    const user = await User.create({ email, password: hashedPassword, role })

    await Basket.create({ userId: user.id })

    const token = generateToken(user.id, user.email, user.role)

    return res.json({ token })
  } catch (err) {
    console.log(err)
  }
}

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body

    const user = await User.findOne({ where: { email } })

    if (!user) {
      return next(ApiError.badRequest(404, 'DFFS'))
    }

    let comparePassword = bcrypt.compareSync(password, user.password)

    if (!comparePassword) {
      return next(ApiError.badRequest(404, 'dsadsfsf'))
    }

    const token = generateToken(user.id, user.email, user.role)

    return res.json({ token })
  } catch (err) {
    console.log(err)
  }
}

const auth = async (req, res) => {
  try {
    const token = generateToken(req.user.id, req.user.email, req.user.role)

    return res.json({ token })
  } catch (err) {
    console.log(err)
  }
}

export { registration, login, auth }
