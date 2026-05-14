export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
      <h1 className="text-5xl font-bold">Apollo Lee</h1>
      <p className="mt-4 text-xl">I&apos;m a BS/MS student at Stanford studying EE.</p>
      <nav className="mt-6 text-lg flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
        <a href="mailto:apollo1@stanford.edu" className="underline-offset-4 hover:underline">Email</a>
        <span aria-hidden="true">·</span>
        <a href="https://www.linkedin.com/in/apollo-lee/" target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline">LinkedIn</a>
        <span aria-hidden="true">·</span>
        <a href="https://scholar.google.com/citations?user=EO7ItooAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline">Google Scholar</a>
        <span aria-hidden="true">·</span>
        <a href="https://github.com/apollolee3" target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline">GitHub</a>
      </nav>
    </div>
  );
}
