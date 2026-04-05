export default function Technologies() {
  const techCategories = [
    {
      category: "Mobile",
      technologies: ["iOS", "Android", "React Native", "Flutter", "Swift", "Kotlin"]
    },
    {
      category: "Frontend",
      technologies: ["React", "Vue.js", "Angular", "Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
      category: "Backend",
      technologies: ["Node.js", "Python", "Java", "PHP", "Ruby", ".NET"]
    },
    {
      category: "Database",
      technologies: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase", "DynamoDB"]
    },
    {
      category: "Cloud",
      technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform"]
    },
    {
      category: "AI/ML",
      technologies: ["TensorFlow", "PyTorch", "OpenAI", "Scikit-learn", "Keras", "Hugging Face"]
    }
  ];

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-block px-4 py-2 bg-[#E8F5E9] text-[#0F9D58] rounded-full text-sm font-medium mb-4">
            Technologies
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Cutting-Edge Technology Stack
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            We leverage the latest technologies to build robust, scalable solutions
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {techCategories.map((category, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 rounded-2xl border-2 border-gray-100 hover:border-[#0F9D58] hover:shadow-lg transition-all duration-300 bg-white"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-[#0F9D58] rounded-full"></div>
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1.5 bg-[#E8F5E9] text-[#0F9D58] rounded-lg text-sm font-medium hover:bg-[#0F9D58] hover:text-white transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
