export default function Profile() {
  return (
    <section className="mb-12 flex gap-6">
      {/* Profile Picture */}
      <div className="flex-shrink-0">
        <img
          src="/profile.jpeg"
          alt="Alexander Sukhin"
          className="w-48 h-48 rounded-full object-cover"
        />
      </div>

      {/* Profile Info */}
      <div className="flex flex-col justify-center">
        <h2 className="text-4xl font-semibold text-gray-900 mb-3">Alexander Sukhin</h2>
        <p className="text-gray-700 text-base leading-relaxed">
          I'm a second-year Computer Science student at King's College London, and a software developer from the United Kingdom. I enjoy building full-stack web applications and contributing to open-source projects. Currently interning as a Software Engineer at Serac Group.
        </p>
      </div>
    </section>
  );
}
