import React from 'react'
import 'components/Categories/Categories.scss'

const Categories = () => {
  return (
    <section className='categories'>
      <div className='categories__wrapper'>
        <div className='categories__item'>
          <img
            src="<%=require('./assets/images/categories-1.png').default%>"
            alt='Изображение'
          />
          <div className='categories__block'>
            <span className='categories__block__title'>hot deal</span>
            <h2 className='categories__block__type'>for men</h2>
          </div>
        </div>
        <div className='categories__item'>
          <img
            src="<%=require('./assets/images/categories-2.png').default%>"
            alt='Изображение'
          />
          <div className='categories__block'>
            <span className='categories__block__title'>30% offer</span>
            <h2 className='categories__block__type'>women</h2>
          </div>
        </div>
        <div className='categories__item'>
          <img
            src="<%=require('./assets/images/categories-3.png').default%>"
            alt='Изображение'
          />
          <div className='categories__block'>
            <span className='categories__block__title'>luxirous & trendy</span>
            <h2 className='categories__block__type'>accesories</h2>
          </div>
        </div>
        <div className='categories__item'>
          <img
            src="<%=require('./assets/images/categories-4.png').default%>"
            alt='Изображение'
          />
          <div className='categories__block'>
            <span className='categories__block__title'>new arrivals</span>
            <h2 className='categories__block__type'>for kids</h2>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Categories
