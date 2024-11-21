// MultilayerCard.jsx (أو .tsx)
import { cn } from '@/lib/utils'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
export const CardBody = ({ title, icon, className = '', id }) => {
  const formatNameForUrl = (name) => encodeURIComponent(name)
  return (
    <div className={cn(className)}>
      <h3 className='text-xl flex items-center justify-center Amiri-font text-gray-900  dark:text-gray-100 '>
        {title}
        <span className=' px-2'>{icon}</span>
      </h3>
      <div className='flex items-center justify-center mt-10'>
        <Link
          to={`/service/${formatNameForUrl(title)}`}
          className='flex  items-center shadow-md hover:font-bold hover:text-shadow-xl hover:shadow-lg hover:bold border-2 border-zinc-400   hover:bg-gray-500 rounded-5  hover:border-gray-500 hover:text-white transition-colors duration-100  text-gray-700 rounded-md px-2 py-1 justify-center text-md'
        >
          <span className='px-2 Amiri-font'> تفاصيل الخدمة </span>
          <ArrowRight className='w-4 h-4 ' />
        </Link>
      </div>
    </div>
  )
}

export const MultilayerCardV_1 = ({ children }) => {
  return (
    <div className='py-0 '>
      <div className='relative w-full'>
        <div className='absolute scale-x-95 inset-0 -rotate-[5deg] rounded-lg bg-gray-200 dark:bg-zinc-800 py-10' />
        {children}
      </div>
    </div>
  )
}
