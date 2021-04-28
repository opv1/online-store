import ApiError from '../error/ApiError.js'
import { Brand } from '../models/models.js'

const create = async (req, res) => {
  try {
    const { name } = req.body

    const brand = await Brand.create({ name })

    return res.json(brand)
  } catch (err) {
    console.log(err)
  }
}

const getAll = async (req, res) => {
  try {
    const brands = await Brand.findAll()

    return res.json(brands)
  } catch (err) {
    console.log(err)
  }
}

export { create, getAll }
