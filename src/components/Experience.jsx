import Timeline from './Timeline.jsx';

export default function Experience() {
  const timelineData = [
    {
      title: 'Software Engineer',
      organization: 'Serac Group',
      period: 'June 2026 – Present',
      description: 'Full-stack software development',
    },
  ];

  return (
    <section className="mt-12" id="experience">
      <h2 className="text-2xl font-bold mb-4 tracking-tight">Experience</h2>
      <div className="card">
        <Timeline items={timelineData} />
      </div>
    </section>
  );
}