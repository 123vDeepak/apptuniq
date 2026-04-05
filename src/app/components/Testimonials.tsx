export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      image: "https://images.unsplash.com/photo-1584940120505-117038d90b05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzc21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NTM3NDcwMHww&ixlib=rb-4.1.0&q=80&w=1080",
      quote: "Working with this team was an absolute pleasure. They delivered our app ahead of schedule and exceeded all expectations. The quality of work is outstanding!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Founder, HealthPlus",
      image: "https://images.unsplash.com/photo-1584554376766-ac0f2c65e949?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzc21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NTM3NDcwMHww&ixlib=rb-4.1.0&q=80&w=1080",
      quote: "The level of professionalism and technical expertise is unmatched. Our healthcare app is now serving thousands of patients daily. Highly recommended!",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Director, ShopNow",
      image: "https://images.unsplash.com/photo-1737574821698-862e77f044c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzc21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NTM3NDcwMHww&ixlib=rb-4.1.0&q=80&w=1080",
      quote: "They transformed our vision into a beautiful, functional e-commerce platform. Our sales have increased by 300% since launch. True partners in our success!",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-block px-4 py-2 bg-[#E8F5E9] text-[#0F9D58] rounded-full text-sm font-medium mb-4">
            Testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 bg-[#0F9D58] rounded-2xl p-8 sm:p-12 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90">
              Join hundreds of satisfied clients and bring your idea to life today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#0F9D58] px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors w-full sm:w-auto">
                Schedule a Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white/10 transition-colors w-full sm:w-auto">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
