import Timeline from './Timeline.jsx';

export default function Experience() {
  const timelineData = [
    {
      title: 'Software Engineer',
      organization: 'Serac Group',
      period: 'June 2026 - Present',
      description: 'Full-stack software development',
    },
    {
      title: 'BSc Computer Science with a Year in Industry',
      organization: 'King\'s College London',
      period: '2024 - 2028',
      description: 'Second year Computer Science student',
    },
  ];

  return (
    <section className="mt-12" id="experience">
      <h2 className="text-3xl font-semibold mb-6">Experience</h2>
      <Timeline items={timelineData} />
    </section>
  );
}
