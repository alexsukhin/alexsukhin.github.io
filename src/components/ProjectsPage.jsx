import ProjectTimeline from './ProjectTimeline.jsx';

export default function ProjectsPage() {
  const projectList = [
    {
      title: "GreenBrick",
      category: "HackLondon",
      description: "Full-stack application for analyzing cost-benefit of property energy efficiency upgrades.",
      skills: "Python • JavaScript • FastAPI",
      link: "https://github.com/alexsukhin/GreenBrick-hacklondon26",
      year: "2026",
      isWinner: true,
    },
    {
      title: "GreenField",
      category: "HackSussex",
      description: "Full stack IoT platform which calculates the exact volume of water needed for specific crops.",
      skills: "Python • JavaScript • FastAPI • Arduino",
      link: "https://github.com/alexsukhin/hacksussex2026",
      year: "2026",
      isWinner: true,
    },
    {
      title: "Grid Flex Agent",
      category: "Imperial AI Agent Hackathon",
      description: "A demo showing how AI agents can coordinate grid flexibility actions in response to predicted feeder overloads.",
      skills: "Python • JavaScript • React",
      link: "https://github.com/alexsukhin/grid-flex-agent-demo",
      year: "2025",
    },
    {
      title: "DevDash",
      category: "Personal Project",
      description: "Personal developer dashboard with typing tests, Kanban, GitHub visualizations, and Pomodoro timer.",
      skills: "Java • SQLite • REST API",
      link: "https://github.com/alexsukhin/devdash",
      year: "2025",
    },
    {
      title: "JabRef Contributor",
      category: "Google Summer of Code",
      description: "Contributed a tabbed 'Cleanup Entries' interface to the JabRef open-source project.",
      skills: "Java • Open-Source • Git",
      link: "https://github.com/JabRef/jabref/pull/13852",
      year: "2025",
    },
    {
      title: "Live Messenger",
      category: "Personal Project",
      description: "Encrypted web messaging app with real-time chat, files, and images.",
      skills: "Flask • JavaScript • MySQL",
      link: "https://github.com/alexsukhin/live-messenger",
      year: "2023",
    },
  ];

  return (
    <section className="mt-12" id="projects">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <ProjectTimeline items={projectList} />
    </section>
  );
}