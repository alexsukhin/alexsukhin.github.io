import Timeline from './Timeline.jsx';

export default function Education() {
  const timelineData = [
    {
      title: 'BSc Computer Science with a Year in Industry',
      organization: "King's College London",
      period: '2024 – 2028',
      description: 'Second year Computer Science student',
    },
  ];

  return (
    <section className="mt-12" id="education">
      <h2 className="text-2xl font-bold mb-4 tracking-tight">Education</h2>
      <div className="card">
        <Timeline items={timelineData} />
      </div>
    </section>
  );
}