import { ImageWithFallback } from './figma/ImageWithFallback';

export default function About() {
  const features = [
    {
      number: "01",
      title: "Experienced Team",
      description: "100+ skilled developers, designers, and strategists with proven expertise"
    },
    {
      number: "02",
      title: "Agile Methodology",
      description: "Flexible, iterative approach ensuring faster delivery and adaptability"
    },
    {
      number: "03",
      title: "24/7 Support",
      description: "Round-the-clock technical support and maintenance for peace of mind"
    },
    {
      number: "04",
      title: "Cost-Effective",
      description: "Competitive pricing without compromising on quality or performance"
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-12 sm:mb-20">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-[#E8F5E9] text-[#0F9D58] rounded-full text-sm font-medium">
              Why Choose Us
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              Your Trusted Technology Partner
            </h2>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              With over a decade of experience, we've helped businesses of all sizes transform
              their digital presence. Our client-centric approach ensures your success is our priority.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-[#E8F5E9] text-[#0F9D58] rounded-lg flex items-center justify-center font-bold flex-shrink-0">
                    {feature.number}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1762341119237-98df67c9c3c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzc1Mzc0Njk5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Mobile development"
                  className="w-full h-48 object-cover rounded-xl"
                />
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758691736843-90f58dce465e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxidXNpbmVzcyUyMHRlYW0lMjBjb2xsYWJvcmF0aW9uJTIwb2ZmaWNlfGVufDF8fHx8MTc3NTM3NDY5OXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Team collaboration"
                  className="w-full h-64 object-cover rounded-xl"
                />
              </div>
              <div className="space-y-4 pt-8">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1767449441925-737379bc2c4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzc1Mzc0Njk5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="App design"
                  className="w-full h-64 object-cover rounded-xl"
                />
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758518729685-f88df7890776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxidXNpbmVzcyUyMHRlYW0lMjBjb2xsYWJvcmF0aW9uJTIwb2ZmaWNlfGVufDF8fHx8MTc3NTM3NDY5OXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Business meeting"
                  className="w-full h-48 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
