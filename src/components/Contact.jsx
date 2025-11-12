export default function Contact() {
  return (
    <section className="mt-12">
      <h2 className="text-3xl font-semibold mb-4">Contact</h2>
      <ul className="flex flex-col gap-4 mt-2">
        <li className="flex items-center gap-3">
          <img
            src="/icons/email.png"
            alt="Email"
            className="h-8 w-8"
          />
          <a href="mailto:alex@sukhin.net" className="text-gray-900 text-lg">
            alex@sukhin.net
          </a>
        </li>
        <li className="flex gap-8 mt-2">
          <a href="https://github.com/alexsukhin" target="_blank" rel="noopener noreferrer">
            <img
              src="/icons/github.png"
              alt="GitHub"
              className="h-8 w-8"
            />
          </a>
          <a href="https://www.linkedin.com/in/alexander-s-55630822a/" target="_blank" rel="noopener noreferrer">
            <img
              src="/icons/linkedin.png"
              alt="LinkedIn"
              className="h-8 w-8"
            />
          </a>
        </li>
      </ul>
    </section>
  );
}
