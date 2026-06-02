export default function Timeline({ items }) {
  return (
    <div className="space-y-6">
      {items.map((item, index) => (
        <div key={index} className="flex justify-between items-start">
          {/* Content */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h3>
            <p className="text-gray-600 mb-1">{item.organization}</p>
            {item.description && (
              <p className="text-gray-700 text-sm">{item.description}</p>
            )}
          </div>
          {/* Period on the right */}
          <span className="text-sm text-stone-500 whitespace-nowrap ml-4">{item.period}</span>
        </div>
      ))}
    </div>
  );
}
