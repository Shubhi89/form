import SectionTitle from './SectionTitle'
import { TESTIMONIALS_DATA } from '../data/constant'
import TestimonialCard from './TestimonialCard'

const TestimonialPage = () => {
  return (
    <>
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Verified Customer Testimonials" center />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </section>
    </>
  )
}

export default TestimonialPage