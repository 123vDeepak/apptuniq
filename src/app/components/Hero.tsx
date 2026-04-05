import { ImageWithFallback } from './figma/ImageWithFallback';

export default function Hero() {
  return (
    <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-[#E8F5E9] text-[#0F9D58] rounded-full text-sm font-medium">
              #1 App Development Company
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Transform Your Vision Into Reality
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              We build innovative mobile and web applications that drive business growth.
              From concept to launch, we're your trusted technology partner.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-[#0F9D58] text-white px-8 py-4 rounded-lg hover:bg-[#0d8a4d] transition-colors shadow-lg shadow-green-500/20 w-full sm:w-auto">
                Start Your Project
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-[#0F9D58] hover:text-[#0F9D58] transition-colors w-full sm:w-auto">
                View Portfolio
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-6">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">500+</div>
                <div className="text-xs sm:text-sm text-gray-600">Projects Delivered</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">98%</div>
                <div className="text-xs sm:text-sm text-gray-600">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">50+</div>
                <div className="text-xs sm:text-sm text-gray-600">Countries Served</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1739298061740-5ed03045b280?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxidXNpbmVzcyUyMHRlYW0lMjBjb2xsYWJvcmF0aW9uJTIwb2ZmaWNlfGVufDF8fHx8MTc3NTM3NDY5OXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Team collaboration"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#0F9D58] rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-gray-900">Quality Assured</div>
                  <div className="text-sm text-gray-600">ISO Certified</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
