export default function ProjectCard({ title, description, skills, link }) {
  return (
    <div className="flex flex-col bg-stone-200 text-gray-900 p-4 rounded-lg shadow-md w-64 h-64">
      <h3 className="text-xl font-bold mb-2">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline text-gray-900"
        >
          {title}
        </a>
      </h3>
      <div className="flex-grow">
        <p className="text-lg">{description}</p>
      </div>
      <p className="text-gray-600 text-sm mt-2">{skills}</p>
    </div>
  );
}
