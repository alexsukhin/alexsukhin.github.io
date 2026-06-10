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
      <div className="space-y-8 md:space-y-12">
        {years.map((year, yearIndex) => (
          <div key={year} className="relative">
            {/* Year label with accent */}
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">{year}</h3>
            </div>

            <hr className="border-gray-900 opacity-10 mb-6"/>

            {/* Projects for this year */}
            <div className="space-y-4">
              {groupedByYear[year].map((item, projectIndex) => (
                <div key={projectIndex} className="card">
                  <div className="flex flex-col gap-2 mb-2">
                    <div className="flex flex-wrap items-baseline gap-2">
                      <a 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-lg font-semibold text-gray-900 hover:text-amber-600 transition-colors inline-flex items-center gap-1.5"
                      >
                        {item.title}
                        <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.165c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.929.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
                        </svg>
                      </a>
                      <span className="text-xs md:text-sm text-stone-500 bg-stone-50 px-2 py-1 rounded-md">{item.category}</span>
                      {item.isWinner && (
                        <span className="text-xs font-semibold text-amber-600 bg-amber-50 px-2 py-1 rounded-md">
                          ⭐ Hackathon Winner
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-sm md:text-base text-gray-700 mb-2 leading-relaxed">{item.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {item.skills.split(' • ').map((skill, idx) => (
                      <span key={idx} className="text-xs text-stone-600 bg-stone-50 px-2 py-1 rounded">{skill.trim()}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}