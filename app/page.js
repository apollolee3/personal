import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Apollo Lee</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-5xl font-bold text-black font-[var(--font-cmu-serif)]">
          Apollo Lee
        </h1>
        <p className="mt-4 text-xl text-black font-[var(--font-cmu-serif)]">
          I'm a BS/MS student at Stanford studying EE.
        </p>
        
        {/* Social Icons */}
        <div className="flex space-x-6 mt-6">
          <a href="https://www.linkedin.com/in/apollo-lee/" target="_blank" rel="noopener noreferrer">
            <img src="/icons/linkedin-svgrepo-com.svg" alt="LinkedIn" className="w-7 h-7 hover:scale-110 transition-transform" />
          </a>
          <a href="https://github.com/apollolee3" target="_blank" rel="noopener noreferrer">
            <img src="/icons/github-svgrepo-com.svg" alt="GitHub" className="w-7 h-7 hover:scale-110 transition-transform" />
          </a>
          <a 
            href="mailto:apollo1@stanford.edu" 
            className="relative top-[-3.1px] text-[27px] left-[2.5px] hover:scale-110 transition-transform"
          >
            ✉️
          </a>
        </div>
      </div>
    </>
  );
}
