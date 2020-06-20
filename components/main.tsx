import Grid from './grid';

export default function Main() {
  return (
    <main className="flex flex-col pt-16 items-center justify-center pb-16">
      <h1 className="text-5xl text-center leading-tight text-gray-800">
        Welcome to{' '}
        <a
          className="text-red-500 hover:underline focus:underline active:underline"
          href="https://nextjs.org"
        >
          Next.js!
        </a>
      </h1>

      <p className="leading-normal text-2xl">
        Get started by editing{' '}
        <code className="bg-gray-200 rounded p-3 text-lg">pages/index.tsx</code>
      </p>
      <Grid />
    </main>
  );
}
