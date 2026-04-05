export default function Services() {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "Mobile App Development",
      description: "Native & cross-platform apps for iOS and Android with stunning UI/UX",
      color: "bg-gradient-to-br from-[#0F9D58] to-[#0D8A4D]"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Web Development",
      description: "Responsive websites and web applications built with modern technologies",
      color: "bg-gradient-to-br from-[#34A853] to-[#0F9D58]"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that enhance user experience and engagement",
      color: "bg-gradient-to-br from-[#A8D08D] to-[#7CB342]"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services for modern businesses",
      color: "bg-gradient-to-br from-[#0D8A4D] to-[#1B4B3C]"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "AI & Machine Learning",
      description: "Intelligent automation and data-driven solutions powered by AI",
      color: "bg-gradient-to-br from-[#7CB342] to-[#558B2F]"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Quality Assurance",
      description: "Comprehensive testing to ensure bug-free, high-performance applications",
      color: "bg-gradient-to-br from-[#558B2F] to-[#33691E]"
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-block px-4 py-2 bg-[#E8F5E9] text-[#0F9D58] rounded-full text-sm font-medium mb-4">
            Our Services
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive Development Solutions
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            From ideation to deployment, we offer end-to-end development services tailored to your needs
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 sm:p-8 rounded-2xl border border-gray-200 hover:border-[#0F9D58] hover:shadow-xl transition-all duration-300 bg-white"
            >
              <div className={`w-14 h-14 sm:w-16 sm:h-16 ${service.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {service.description}
              </p>

              <button className="mt-6 text-[#0F9D58] font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
