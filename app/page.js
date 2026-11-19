function A({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="underline decoration-black/40 decoration-1 underline-offset-4 hover:decoration-black"
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <div className="fade-in max-w-2xl mx-auto px-6 pt-16 md:pt-20 pb-16">
      <img
        src="/me.jpg"
        alt="Apollo Lee"
        width={128}
        height={128}
        className="float-right ml-8 mt-2 mb-6 h-32 w-32 rounded-full object-cover"
      />
      <h1 className="text-[28px] font-bold">Apollo Lee</h1>
      <div className="mt-6 space-y-4 text-base leading-relaxed text-pretty">
        <p>I study EE at Stanford and grew up in New Jersey.</p>
        <p>
          I’m a researcher who enjoys building in software and hardware.
          Previously, I interned as a QR at{" "}
          <strong>IMC Trading</strong>, where I developed a volatility alpha
          strategy on the systematic equity options desk. I also built test
          hardware for the V4 Supercharger and Gen 3 Mobile Connector at{" "}
          <strong>Tesla</strong> and LLM e-commerce agents at{" "}
          <strong>Amazon</strong>.
        </p>
        <p>
          Earlier I pursued research in plasma physics and fusion. At
          Princeton’s Center for Statistics and ML I helped build a{" "}
          <A href="https://arxiv.org/abs/2409.03112">
            digital twin of a tokamak
          </A>{" "}
          in NVIDIA Omniverse, and at{" "}
          Argonne National Laboratory I{" "}
          <A href="https://www.alcf.anl.gov/news/summer-students-tackle-supercomputing-and-ai-research-projects">
            preprocessed plasma imaging data
          </A>{" "}
          for deep learning disruption prediction on the Polaris supercomputer.
        </p>
        <p>Feel free to reach out at apollolee3 [at] gmail [dot] com.</p>
      </div>
      <nav className="mt-6 text-[13px] opacity-70 flex flex-wrap items-center gap-x-[5px] gap-y-1">
        <a href="https://www.linkedin.com/in/apollo-lee/" target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline">LinkedIn</a>
        <span aria-hidden="true">·</span>
        <a href="https://github.com/apollolee3" target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline">GitHub</a>
        <span aria-hidden="true">·</span>
        <a href="https://x.com/apollowlee" target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline">X</a>
        <span aria-hidden="true">·</span>
        <a href="https://scholar.google.com/citations?user=EO7ItooAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline">Google Scholar</a>
      </nav>
    </div>
  );
}
