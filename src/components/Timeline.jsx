export default function Timeline({ items }) {
  return (
    <div className="space-y-6">
      {items.map((item, index) => (
        <div key={index} className="flex flex-col gap-1">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-base font-semibold text-gray-900">{item.title}</h3>
            {item.period && (
              <span className="text-sm text-gray-400 whitespace-nowrap">{item.period}</span>
            )}
          </div>
          <p className="text-sm font-medium text-gray-600">{item.organization}</p>
          {item.description && (
            <p className="text-sm text-gray-500">{item.description}</p>
          )}
        </div>
      ))}
    </div>
  );
}