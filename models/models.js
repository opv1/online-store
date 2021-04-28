import sequelize from 'sequelize'
import { instanceSequelize } from '../db.js'

const { DataTypes } = sequelize

const User = instanceSequelize.define('user', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: 'USER' },
})

const Basket = instanceSequelize.define('basket', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

const BasketGarment = instanceSequelize.define('basket_garment', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

const Garment = instanceSequelize.define('garment', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  price: { type: DataTypes.INTEGER, allowNull: false },
  rating: { type: DataTypes.INTEGER, defaultValue: 0 },
  img: { type: DataTypes.STRING, allowNull: false },
})

const GarmentInfo = instanceSequelize.define('garment_info', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
})

const Type = instanceSequelize.define('type', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
})

const TypeBrand = instanceSequelize.define('type_brand', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

const Brand = instanceSequelize.define('brand', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
})

const Rating = instanceSequelize.define('rating', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  rate: { type: DataTypes.INTEGER, allowNull: false },
})

User.hasOne(Basket)
Basket.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

Basket.hasMany(BasketGarment)
BasketGarment.belongsTo(Basket)

Type.hasMany(Garment)
Garment.belongsTo(Type)

Brand.hasMany(Garment)
Garment.belongsTo(Brand)

Garment.hasMany(Rating)
Rating.belongsTo(Garment)

Garment.hasMany(BasketGarment)
BasketGarment.belongsTo(Garment)

Garment.hasMany(GarmentInfo, { as: 'info' })
GarmentInfo.belongsTo(Garment)

Type.belongsToMany(Brand, { through: TypeBrand })
Brand.belongsToMany(Type, { through: TypeBrand })

export {
  User,
  Basket,
  BasketGarment,
  Garment,
  GarmentInfo,
  Type,
  TypeBrand,
  Brand,
  Rating,
}
