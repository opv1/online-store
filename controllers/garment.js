import path from 'path'
import { v4 as uuidv4 } from 'uuid'
import ApiError from '../error/ApiError.js'
import { Garment, GarmentInfo } from '../models/models.js'

const create = async (req, res, next) => {
  try {
    let { name, price, info, typeId, brandId } = req.body
    const { img } = req.files

    let fileName = uuidv4() + '.jpg'

    img.mv(path.resolve(__dirname, '..', 'static', fileName))

    const garment = await Garment.create({
      name,
      price,
      typeId,
      brandId,
      img: fileName,
    })

    if (info) {
      info = JSON.parse(info)
      info.forEach((i) =>
        GarmentInfo.create({
          garmentId: garment.id,
          title: i.title,
          description: i.description,
        })
      )
    }

    return res.json(garment)
  } catch (err) {
    next(ApiError.badRequest(404, err.message))
  }
}

const getAll = async (req, res) => {
  try {
    let { typeId, brandId, page, limit } = req.body

    page = page || 1
    limit = limit || 9

    let offset = page * limit - limit
    let garments = []

    if (!typeId && !brandId) {
      garments = await Garment.findAndCountAll({ limit, offset })
    }

    if (!typeId && brandId) {
      garments = await Garment.findAndCountAll({
        where: { brandId, limit, offset },
      })
    }

    if (typeId && !brandId) {
      garments = await Garment.findAndCountAll({
        where: { typeId, limit, offset },
      })
    }

    if (typeId && brandId) {
      garments = await Garment.findAndCountAll({
        where: { typeId, brandId, limit, offset },
      })
    }

    return res.json(garments)
  } catch (err) {
    console.log(err)
  }
}

const getOne = async (req, res) => {
  try {
    const { id } = req.params

    const garment = await Garment.findOne({
      where: { id },
      include: [{ model: GarmentInfo, as: 'info' }],
    })

    return res.json(garment)
  } catch (err) {
    console.log(err)
  }
}

export { create, getAll, getOne }
