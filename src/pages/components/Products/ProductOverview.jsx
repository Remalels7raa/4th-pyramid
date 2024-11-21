import Cell from '@/components/Ui/Cell'
import { RealEstateCard } from '@/components/Ui/RealEstateCard'
import { cn } from '@/lib/utils'
import React from 'react'
import {
  images1,
  images2,
  images3,
  images4,
  images5,
} from './productsImagesHome'

const cells = [
  { content: <RealEstateCard image={images1} /> },
  { content: <RealEstateCard image={images2} /> },
  { content: <RealEstateCard image={images3} /> },
  { content: <RealEstateCard image={images4} /> },
  { content: <RealEstateCard image={images5} /> },
]

const ProductOverview = () => {
  return (
    <section className='home-products py-10 bg-gray-100'>
      <div className='container min-w-7xl max-h-full mx-auto md:px-18'>
        <div className='py-6 features1-text text-center px-4'>
          <h3 className='text-2xl font-bold'>المشاريع</h3>
          <p className='text-3xl shadow-3d font-bold text-center mt-4'>
            مجموعة من أعمالنا
          </p>
        </div>
        <div className='pt-8 px-4'>
          <div className='grid md:grid-cols-4 gap-1'>
            {cells.map((cell, i) => (
              <div
                key={i}
                className={cn(
                  'p-1 rounded-lg h-2/3',
                  i === 1 && 'md:col-span-2 md:h-full md:row-span-2',
                  i === 4 && 'md:col-start-4'
                )}
              >
                <Cell content={cell.content} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductOverview
