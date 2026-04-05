export default function Industries() {
  const industries = [
    {
      icon: "🏥",
      title: "Healthcare",
      description: "HIPAA-compliant solutions for modern healthcare"
    },
    {
      icon: "💰",
      title: "Fintech",
      description: "Secure financial applications and payment systems"
    },
    {
      icon: "🛒",
      title: "E-Commerce",
      description: "Scalable online stores and marketplaces"
    },
    {
      icon: "📚",
      title: "Education",
      description: "Interactive e-learning platforms and apps"
    },
    {
      icon: "🚗",
      title: "Transportation",
      description: "Smart logistics and fleet management solutions"
    },
    {
      icon: "🏠",
      title: "Real Estate",
      description: "Property management and listing platforms"
    },
    {
      icon: "🎮",
      title: "Gaming",
      description: "Engaging mobile and web-based games"
    },
    {
      icon: "🍔",
      title: "Food & Beverage",
      description: "Delivery apps and restaurant management"
    }
  ];

  return (
    <section id="industries" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-block px-4 py-2 bg-[#E8F5E9] text-[#0F9D58] rounded-full text-sm font-medium mb-4">
            Industries We Serve
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Expertise Across Multiple Sectors
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            We deliver specialized solutions for diverse industries with deep domain knowledge
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="p-4 sm:p-6 bg-white rounded-xl border border-gray-200 hover:border-[#0F9D58] hover:shadow-lg transition-all text-center group cursor-pointer"
            >
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                {industry.icon}
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">
                {industry.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
