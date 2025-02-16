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
      </div>
    </>
  );
}
