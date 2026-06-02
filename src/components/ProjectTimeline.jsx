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
      {/* Vertical timeline line */}
      <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-stone-300"></div>

      <div className="space-y-12">
        {years.map((year, yearIndex) => (
          <div key={year} className="relative pl-16">
            {/* Year dot */}
            <div className="absolute left-0 top-0 w-7 h-7 bg-stone-100 border-2 border-stone-800 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-stone-800 rounded-full"></div>
            </div>

            {/* Year label */}
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{year}</h3>

            {/* Projects for this year */}
            <div className="space-y-4">
              {groupedByYear[year].map((item, projectIndex) => (
                <div key={projectIndex} className="pb-3">
                  <div className="flex items-baseline gap-2 mb-1">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-semibold text-gray-900 no-underline hover:text-gray-600 transition-colors"
                    >
                      {item.title}
                    </a>
                    <span className="text-sm text-stone-500">{item.category}</span>
                    {item.isWinner && (
                      <span className="text-xs font-semibold text-yellow-500">
                        [Hackathon Winner]
                      </span>
                    )}
                  </div>
                  <p className="text-gray-700 mb-1">{item.description}</p>
                  <p className="text-gray-600 text-sm">{item.skills}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
