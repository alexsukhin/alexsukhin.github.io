import ProjectCard from './ProjectCard.jsx';

export default function Projects() {
  const projectList = [
    {
      title: "Live Messenger",
      description: "Encrypted web messaging app with real-time chat, files, and images.",
      skills: "Flask • JavaScript • MySQL",
      link: "https://github.com/alexsukhin/live-messenger",
    },
    {
      title: "DevDash",
      description: "Personal developer dashboard with typing tests, Kanban, GitHub visualizations, and Pomodoro timer.",
      skills: "Java • SQLite • REST API",
      link: "https://github.com/alexsukhin/devdash",
    },
  ];

  return (
    <section className="mt-12">
      <h2 className="text-3xl font-semibold mb-6">Projects</h2>
      <div className="flex flex-wrap gap-6">
        {projectList.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            skills={project.skills}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}
