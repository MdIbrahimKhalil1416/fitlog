import Link from "next/link";

const NotFound = () => {
  return (
    <section className="flex flex-col items-center justify-center px-6 py-32 text-center">
      <h1 className="font-display text-7xl font-bold text-[#C6FF00]">404</h1>
      <h2 className="font-display mt-4 text-2xl font-bold uppercase text-white">
        Page not found
      </h2>
      <p className="mt-2 text-sm text-[#9296A1]">
        This lift isn&apos;t in the library. Head back and pick another one.
      </p>
      <Link
        href="/"
        className="mt-6 inline-block rounded-full bg-[#C6FF00] px-6 py-2 text-xs font-bold text-black"
      >
        Back to home
      </Link>
    </section>
  );
};

export default NotFound;
