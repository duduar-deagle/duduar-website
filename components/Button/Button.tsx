export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="rounded-xl p-4 mx-auto block font-serif uppercase text-cyberBlue shadow-[-2px_-2px_2px_rgba(255,255,255,0.08),2px_2px_2px_rgba(0,0,0,0.56),inset_2px_2px_2px_rgba(255,255,255,0.08),inset_-2px_-2px_2px_rgba(0,0,0,0.56)] active:shadow-[2px_2px_2px_rgba(255,255,255,0.08),-2px_-2px_2px_rgba(0,0,0,0.56),inset_-2px_-2px_2px_rgba(255,255,255,0.08),inset_2px_2px_2px_rgba(0,0,0,0.56)] transition duration-100 ease-in-out">
      {children}
    </button>
  );
}
