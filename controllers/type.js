import ApiError from '../error/ApiError.js'
import { Type } from '../models/models.js'

const create = async (req, res) => {
  try {
    const { name } = req.body

    const type = await Type.create({ name })

    return res.json(type)
  } catch (err) {
    console.log(err)
  }
}

const getAll = async (req, res) => {
  try {
    const types = await Type.findAll()

    return res.json(types)
  } catch (err) {
    console.log(err)
  }
}

export { create, getAll }
