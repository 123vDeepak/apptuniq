export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Discovery & Planning",
      description: "We analyze your requirements, research the market, and create a detailed project roadmap tailored to your business goals.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      number: "02",
      title: "Design & Prototype",
      description: "Our design team creates intuitive wireframes and interactive prototypes to visualize your product before development.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z" />
        </svg>
      )
    },
    {
      number: "03",
      title: "Development",
      description: "Using agile methodology, we build your application with clean code, regular updates, and continuous integration.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      number: "04",
      title: "Testing & QA",
      description: "Rigorous testing across devices and platforms ensures your app is bug-free, secure, and performs flawlessly.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      )
    },
    {
      number: "05",
      title: "Deployment",
      description: "We handle the complete launch process, from app store submissions to cloud infrastructure setup and configuration.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      )
    },
    {
      number: "06",
      title: "Support & Maintenance",
      description: "Post-launch, we provide ongoing support, updates, and enhancements to keep your application running smoothly.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-block px-4 py-2 bg-[#E8F5E9] text-[#0F9D58] rounded-full text-sm font-medium mb-4">
            Our Process
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            How We Bring Your Vision to Life
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            A proven, systematic approach to deliver exceptional results
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative p-6 sm:p-8 rounded-2xl bg-white border border-gray-200 hover:border-[#0F9D58] hover:shadow-xl transition-all duration-300 group"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-[#0F9D58] to-[#0D8A4D] rounded-xl flex items-center justify-center text-white font-bold shadow-lg group-hover:scale-110 transition-transform">
                {step.number}
              </div>

              <div className="w-14 h-14 bg-[#E8F5E9] rounded-xl flex items-center justify-center text-[#0F9D58] mb-6 mt-4 group-hover:bg-[#0F9D58] group-hover:text-white transition-colors">
                {step.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
