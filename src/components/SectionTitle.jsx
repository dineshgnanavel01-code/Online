export default function SectionTitle({ badge, title, description,
}) {
  return (
    <div className="group mx-auto mb-12 max-w-full px-4 text-center sm:px-6">
      {badge && (
        <div className="inline-block perspective-1000">
          <span className="mb-4 inline-block rounded-full bg-indigo-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-indigo-600 shadow-sm transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-105 group-hover:bg-indigo-600 group-hover:text-white group-hover:shadow-md group-hover:shadow-indigo-500/25 sm:text-sm">
            {badge}
          </span>
        </div>
      )}

      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 transition-all duration-300 group-hover:tracking-wide md:text-4xl lg:text-5xl">
        <span className="transition-all duration-300 bg-gradient-to-r from-gray-900 via-gray-900 to-gray-700 bg-clip-text group-hover:from-indigo-600 group-hover:to-purple-600 group-hover:text-transparent">
          {title}
        </span>
      </h2>

      {description && (
        <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
          {description}
        </p>
      )}

      <div className="mt-6 flex justify-center">
        <div className="h-1 w-12 rounded-full bg-indigo-500/30 transition-all duration-500 group-hover:w-24 group-hover:bg-indigo-600" />
      </div>
    </div>
  );
}