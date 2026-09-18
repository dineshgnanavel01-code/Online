const stats = [
  { number: "50K+", label: "Active Students", highlight: "Growing daily" },
  { number: "500+", label: "Expert Courses", highlight: "Updated content" },
  { number: "100+", label: "Master Instructors", highlight: "Industry leaders" },
  { number: "95%", label: "Success Rate", highlight: "Verified results" },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden border-y border-gray-100 bg-gradient-to-b from-gray-50/50 via-white to-gray-50/50 py-16">
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-48 w-96 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-full px-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group relative perspective-1000"
            >
              <div className="relative h-full rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-md transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:rotate-x-3 group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:shadow-indigo-500/10 group-hover:border-indigo-200">
                
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-50/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center justify-center">
                  <span className="inline-block rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600 mb-3 transition-colors duration-300 group-hover:bg-indigo-600 group-hover:text-white">
                    {stat.highlight}
                  </span>
                  
                  <h3 className="text-4xl font-extrabold tracking-tight text-gray-900 transition-colors duration-300 group-hover:text-indigo-600">
                    {stat.number}
                  </h3>
                  
                  <p className="mt-2 text-sm font-medium text-gray-500 transition-colors duration-300 group-hover:text-gray-700">
                    {stat.label}
                  </p>
                </div>

                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-500 group-hover:w-1/2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}