export default function ProjectTimeline({ items }) {
  // Group projects by year
  const groupedByYear = items.reduce((acc, item) => {
    if (!acc[item.year]) {
      acc[item.year] = [];
    }
    acc[item.year].push(item);
    return acc;
  }, {});

  // Sort years in descending order
  const years = Object.keys(groupedByYear).sort((a, b) => b - a);

  return (
    <div className="relative">
      {/* Vertical timeline line  */}
      <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-stone-300"></div>

      <div className="space-y-8 md:space-y-12">
        {years.map((year, yearIndex) => (
          <div key={year} className="relative pl-12 md:pl-16">
            {/* Year dot */}
            <div className="absolute left-0 top-0 w-6 h-6 md:w-7 md:h-7 bg-stone-100 border-2 border-stone-800 rounded-full flex items-center justify-center">
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-stone-800 rounded-full"></div>
            </div>

            {/* Year label */}
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">{year}</h3>

            {/* Projects for this year */}
            <div className="space-y-4">
              {groupedByYear[year].map((item, projectIndex) => (
                <div key={projectIndex} className="pb-3">
                  <div className="flex flex-wrap items-baseline gap-1.5 md:gap-2 mb-1">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base md:text-lg font-semibold text-gray-900 no-underline hover:text-gray-600 transition-colors"
                    >
                      {item.title}
                    </a>
                    <span className="text-xs md:text-sm text-stone-500">{item.category}</span>
                    {item.isWinner && (
                      <span className="text-xs font-semibold text-yellow-500">
                        [Hackathon Winner]
                      </span>
                    )}
                  </div>
                  <p className="text-sm md:text-base text-gray-700 mb-1">{item.description}</p>
                  <p className="text-xs md:text-sm text-gray-600">{item.skills}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}