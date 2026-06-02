export default function Contact() {
  return (
    <section className="mt-12">
      <div className="flex items-center gap-8">
        <a href="mailto:alex@sukhin.net" className="hover:opacity-70 transition-opacity">
          <img
            src="/icons/email.png"
            alt="Email"
            className="h-8 w-8"
          />
        </a>
        <a href="https://github.com/alexsukhin" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
          <img
            src="/icons/github.png"
            alt="GitHub"
            className="h-8 w-8"
          />
        </a>
        <a href="https://www.linkedin.com/in/alexander-s-55630822a/" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
          <img
            src="/icons/linkedin.png"
            alt="LinkedIn"
            className="h-8 w-8"
          />
        </a>
      </div>
    </section>
  );
}