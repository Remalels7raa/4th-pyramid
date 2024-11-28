import { useNavigate, useParams } from 'react-router-dom'
import { cardDetails } from '../Services/ServicescardTitles'
import { Button } from '@/components/Ui/button'
import { ArrowRight } from 'lucide-react'

const ServiceDetails = () => {
  const { title } = useParams()
  const decodedTitle = decodeURIComponent(title)

  // Find the service based on the decoded title
  const service = cardDetails.find((service) => service.title === decodedTitle)

  const Navigate = useNavigate()

  // Check if service exists
  if (!service) {
    return (
      <div className='container mx-auto my-10 p-5 text-center'>
        <h2 className='text-2xl font-semibold'>الخدمة غير موجودة</h2>
        <p className='text-lg mt-2'>يرجى التأكد من اختيار خدمة صحيحة.</p>
      </div>
    )
  }

  return (
    <div className='container min-w-7xl mx-auto my-10 p-5 bg-white shadow-lg rounded-lg border border-gray-200'>
      <h1 className='text-4xl leading-8 font-bold text-center text-cyan-600 mb-5 shadow-3d'>
        {service.title}
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-1'>
        <div className='flex items-center my-10 bg-gray-200 justify-center'>
          <p className='text-md lg:text-lg leading-relaxed transition-transform duration-300 text-gray-700 whitespace-pre-line w-3/4 p-4 bg-gray-100 rounded-lg shadow-md'>
            {service.details}
          </p>
        </div>
        {service.image && (
          <div className='image-content py-10 flex justify-center items-center'>
            <img
              src={service.image}
              alt={service.title}
              className='w-full px-6 h-auto object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-sm'
            />
          </div>
        )}
      </div>
      <div className='text-center my-3'>
        <Button
          onClick={() => Navigate('/services')}
          className='py-6 my-6 px-6 rounded-5 bg-cyan-500 hover:bg-cyan-600 Amiri-font text-white text-xl font-bold'
        >
          <ArrowRight /> جميع الخدمات
        </Button>
      </div>
    </div>
  )
}

export default ServiceDetails
