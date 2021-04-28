import React from 'react'
import 'components/Examples/Examples.scss'

const Examples = () => {
  return (
    <section className='examples'>
      <div className='examples-wrapper'>
        <h3 className='examples-caption'>examples Items</h3>
        <span className='examples-subcaption'>
          Shop for items based on what we featured in this week
        </span>
        <div className='examples-container'>
          <section className='examples-container__item'>
            <div className='examples-container__item__image'>
              <img
                src="<%=require('./assets/images/examples-1.png').default%>"
                alt='Товар'
              />
            </div>
            <span className='examples-container__item__title'>
              Mango People T-shirt
            </span>
            <span className='examples-container__item__price'>$52.00</span>
            <div className='examples-container__item__cart'>
              <div className='examples-container__item__cart__image'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='23'
                  height='23'
                  viewBox='0 0 32 29'
                >
                  <defs></defs>
                  <path
                    id='Forma_1'
                    data-name='Forma 1'
                    className='cls-2'
                    d='M1182.18,42.364h3.4l4.83,17.455a1.183,1.183,0,0,0,1.14.867h14.86a1.175,1.175,0,0,0,1.08-.709l5.41-12.412a1.186,1.186,0,0,0-1.09-1.655H1195.4a1.182,1.182,0,0,0,0,2.364H1210l-4.38,10.048h-13.18l-4.83-17.455a1.186,1.186,0,0,0-1.15-.867h-4.28A1.182,1.182,0,0,0,1182.18,42.364ZM1190.43,69a2.679,2.679,0,1,0-2.68-2.679A2.681,2.681,0,0,0,1190.43,69Zm16.77,0h0.19a2.686,2.686,0,0,0-.37-5.359A2.683,2.683,0,0,0,1207.2,69Z'
                    transform='translate(-1181 -40)'
                  />
                </svg>
              </div>
              <span className='examples-container__item__cart__title'>
                Add to Cart
              </span>
            </div>
          </section>
          <section className='examples-container__item'>
            <div className='examples-container__item__image'>
              <img
                src="<%=require('./assets/images/examples-2.png').default%>"
                alt='Товар'
              />
            </div>
            <span className='examples-container__item__title'>
              Mango People T-shirt
            </span>
            <span className='examples-container__item__price'>$52.00</span>
            <div className='examples-container__item__cart'>
              <div className='examples-container__item__cart__image'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='23'
                  height='23'
                  viewBox='0 0 32 29'
                >
                  <defs></defs>
                  <path
                    id='Forma_1'
                    data-name='Forma 1'
                    className='cls-2'
                    d='M1182.18,42.364h3.4l4.83,17.455a1.183,1.183,0,0,0,1.14.867h14.86a1.175,1.175,0,0,0,1.08-.709l5.41-12.412a1.186,1.186,0,0,0-1.09-1.655H1195.4a1.182,1.182,0,0,0,0,2.364H1210l-4.38,10.048h-13.18l-4.83-17.455a1.186,1.186,0,0,0-1.15-.867h-4.28A1.182,1.182,0,0,0,1182.18,42.364ZM1190.43,69a2.679,2.679,0,1,0-2.68-2.679A2.681,2.681,0,0,0,1190.43,69Zm16.77,0h0.19a2.686,2.686,0,0,0-.37-5.359A2.683,2.683,0,0,0,1207.2,69Z'
                    transform='translate(-1181 -40)'
                  />
                </svg>
              </div>
              <span className='examples-container__item__cart__title'>
                Add to Cart
              </span>
            </div>
          </section>
          <section className='examples-container__item'>
            <div className='examples-container__item__image'>
              <img
                src="<%=require('./assets/images/examples-3.png').default%>"
                alt='Товар'
              />
            </div>
            <span className='examples-container__item__title'>
              Mango People T-shirt
            </span>
            <span className='examples-container__item__price'>$52.00</span>
            <div className='examples-container__item__cart'>
              <div className='examples-container__item__cart__image'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='23'
                  height='23'
                  viewBox='0 0 32 29'
                >
                  <defs></defs>
                  <path
                    id='Forma_1'
                    data-name='Forma 1'
                    className='cls-2'
                    d='M1182.18,42.364h3.4l4.83,17.455a1.183,1.183,0,0,0,1.14.867h14.86a1.175,1.175,0,0,0,1.08-.709l5.41-12.412a1.186,1.186,0,0,0-1.09-1.655H1195.4a1.182,1.182,0,0,0,0,2.364H1210l-4.38,10.048h-13.18l-4.83-17.455a1.186,1.186,0,0,0-1.15-.867h-4.28A1.182,1.182,0,0,0,1182.18,42.364ZM1190.43,69a2.679,2.679,0,1,0-2.68-2.679A2.681,2.681,0,0,0,1190.43,69Zm16.77,0h0.19a2.686,2.686,0,0,0-.37-5.359A2.683,2.683,0,0,0,1207.2,69Z'
                    transform='translate(-1181 -40)'
                  />
                </svg>
              </div>
              <span className='examples-container__item__cart__title'>
                Add to Cart
              </span>
            </div>
          </section>
          <section className='examples-container__item'>
            <div className='examples-container__item__image'>
              <img
                src="<%=require('./assets/images/examples-4.png').default%>"
                alt='Товар'
              />
            </div>
            <span className='examples-container__item__title'>
              Mango People T-shirt
            </span>
            <span className='examples-container__item__price'>$52.00</span>
            <div className='examples-container__item__cart'>
              <div className='examples-container__item__cart__image'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='23'
                  height='23'
                  viewBox='0 0 32 29'
                >
                  <defs></defs>
                  <path
                    id='Forma_1'
                    data-name='Forma 1'
                    className='cls-2'
                    d='M1182.18,42.364h3.4l4.83,17.455a1.183,1.183,0,0,0,1.14.867h14.86a1.175,1.175,0,0,0,1.08-.709l5.41-12.412a1.186,1.186,0,0,0-1.09-1.655H1195.4a1.182,1.182,0,0,0,0,2.364H1210l-4.38,10.048h-13.18l-4.83-17.455a1.186,1.186,0,0,0-1.15-.867h-4.28A1.182,1.182,0,0,0,1182.18,42.364ZM1190.43,69a2.679,2.679,0,1,0-2.68-2.679A2.681,2.681,0,0,0,1190.43,69Zm16.77,0h0.19a2.686,2.686,0,0,0-.37-5.359A2.683,2.683,0,0,0,1207.2,69Z'
                    transform='translate(-1181 -40)'
                  />
                </svg>
              </div>
              <span className='examples-container__item__cart__title'>
                Add to Cart
              </span>
            </div>
          </section>
          <section className='examples-container__item'>
            <div className='examples-container__item__image'>
              <img
                src="<%=require('./assets/images/examples-5.png').default%>"
                alt='Товар'
              />
            </div>
            <span className='examples-container__item__title'>
              Mango People T-shirt
            </span>
            <span className='examples-container__item__price'>$52.00</span>
            <div className='examples-container__item__cart'>
              <div className='examples-container__item__cart__image'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='23'
                  height='23'
                  viewBox='0 0 32 29'
                >
                  <defs></defs>
                  <path
                    id='Forma_1'
                    data-name='Forma 1'
                    className='cls-2'
                    d='M1182.18,42.364h3.4l4.83,17.455a1.183,1.183,0,0,0,1.14.867h14.86a1.175,1.175,0,0,0,1.08-.709l5.41-12.412a1.186,1.186,0,0,0-1.09-1.655H1195.4a1.182,1.182,0,0,0,0,2.364H1210l-4.38,10.048h-13.18l-4.83-17.455a1.186,1.186,0,0,0-1.15-.867h-4.28A1.182,1.182,0,0,0,1182.18,42.364ZM1190.43,69a2.679,2.679,0,1,0-2.68-2.679A2.681,2.681,0,0,0,1190.43,69Zm16.77,0h0.19a2.686,2.686,0,0,0-.37-5.359A2.683,2.683,0,0,0,1207.2,69Z'
                    transform='translate(-1181 -40)'
                  />
                </svg>
              </div>
              <span className='examples-container__item__cart__title'>
                Add to Cart
              </span>
            </div>
          </section>
          <section className='examples-container__item'>
            <div className='examples-container__item__image'>
              <img
                src="<%=require('./assets/images/examples-6.png').default%>"
                alt='Товар'
              />
            </div>
            <span className='examples-container__item__title'>
              Mango People T-shirt
            </span>
            <span className='examples-container__item__price'>$52.00</span>
            <div className='examples-container__item__cart'>
              <div className='examples-container__item__cart__image'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='23'
                  height='23'
                  viewBox='0 0 32 29'
                >
                  <defs></defs>
                  <path
                    id='Forma_1'
                    data-name='Forma 1'
                    className='cls-2'
                    d='M1182.18,42.364h3.4l4.83,17.455a1.183,1.183,0,0,0,1.14.867h14.86a1.175,1.175,0,0,0,1.08-.709l5.41-12.412a1.186,1.186,0,0,0-1.09-1.655H1195.4a1.182,1.182,0,0,0,0,2.364H1210l-4.38,10.048h-13.18l-4.83-17.455a1.186,1.186,0,0,0-1.15-.867h-4.28A1.182,1.182,0,0,0,1182.18,42.364ZM1190.43,69a2.679,2.679,0,1,0-2.68-2.679A2.681,2.681,0,0,0,1190.43,69Zm16.77,0h0.19a2.686,2.686,0,0,0-.37-5.359A2.683,2.683,0,0,0,1207.2,69Z'
                    transform='translate(-1181 -40)'
                  />
                </svg>
              </div>
              <span className='examples-container__item__cart__title'>
                Add to Cart
              </span>
            </div>
          </section>
          <section className='examples-container__item'>
            <div className='examples-container__item__image'>
              <img
                src="<%=require('./assets/images/examples-7.png').default%>"
                alt='Товар'
              />
            </div>
            <span className='examples-container__item__title'>
              Mango People T-shirt
            </span>
            <span className='examples-container__item__price'>$52.00</span>
            <div className='examples-container__item__cart'>
              <div className='examples-container__item__cart__image'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='23'
                  height='23'
                  viewBox='0 0 32 29'
                >
                  <defs></defs>
                  <path
                    id='Forma_1'
                    data-name='Forma 1'
                    className='cls-2'
                    d='M1182.18,42.364h3.4l4.83,17.455a1.183,1.183,0,0,0,1.14.867h14.86a1.175,1.175,0,0,0,1.08-.709l5.41-12.412a1.186,1.186,0,0,0-1.09-1.655H1195.4a1.182,1.182,0,0,0,0,2.364H1210l-4.38,10.048h-13.18l-4.83-17.455a1.186,1.186,0,0,0-1.15-.867h-4.28A1.182,1.182,0,0,0,1182.18,42.364ZM1190.43,69a2.679,2.679,0,1,0-2.68-2.679A2.681,2.681,0,0,0,1190.43,69Zm16.77,0h0.19a2.686,2.686,0,0,0-.37-5.359A2.683,2.683,0,0,0,1207.2,69Z'
                    transform='translate(-1181 -40)'
                  />
                </svg>
              </div>
              <span className='examples-container__item__cart__title'>
                Add to Cart
              </span>
            </div>
          </section>
          <section className='examples-container__item'>
            <div className='examples-container__item__image'>
              <img
                src="<%=require('./assets/images/examples-8.png').default%>"
                alt='Товар'
              />
            </div>
            <span className='examples-container__item__title'>
              Mango People T-shirt
            </span>
            <span className='examples-container__item__price'>$52.00</span>
            <div className='examples-container__item__cart'>
              <div className='examples-container__item__cart__image'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='23'
                  height='23'
                  viewBox='0 0 32 29'
                >
                  <defs></defs>
                  <path
                    id='Forma_1'
                    data-name='Forma 1'
                    className='cls-2'
                    d='M1182.18,42.364h3.4l4.83,17.455a1.183,1.183,0,0,0,1.14.867h14.86a1.175,1.175,0,0,0,1.08-.709l5.41-12.412a1.186,1.186,0,0,0-1.09-1.655H1195.4a1.182,1.182,0,0,0,0,2.364H1210l-4.38,10.048h-13.18l-4.83-17.455a1.186,1.186,0,0,0-1.15-.867h-4.28A1.182,1.182,0,0,0,1182.18,42.364ZM1190.43,69a2.679,2.679,0,1,0-2.68-2.679A2.681,2.681,0,0,0,1190.43,69Zm16.77,0h0.19a2.686,2.686,0,0,0-.37-5.359A2.683,2.683,0,0,0,1207.2,69Z'
                    transform='translate(-1181 -40)'
                  />
                </svg>
              </div>
              <span className='examples-container__item__cart__title'>
                Add to Cart
              </span>
            </div>
          </section>
        </div>
        <a className='examples-link' href='#'>
          <span>Browse All Product</span>
          <i className='fas fa-long-arrow-alt-right'></i>
        </a>
      </div>
    </section>
  )
}

export default Examples
