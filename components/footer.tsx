export default function Footer() {
  return (
    <footer className="bg-red-200 w-full h-16 flex items-center justify-center bottom-0 absolute">
      <a
        href="/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-center items-center"
      >
        © Babshai.com
        {/* <img src="/vercel.svg" alt="Babshai Logo" className="h-4 ml-1" /> */}
      </a>
    </footer>
  );
}
