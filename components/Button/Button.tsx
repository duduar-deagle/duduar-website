import clsx from "clsx";

export default function Button({
  children,
  marginTop = "mt-0",
}: {
  children: React.ReactNode;
  marginTop?: String;
}) {
  return (
    <button
      className={clsx(
        "rounded-xl p-4",
        marginTop,
        "mx-auto block font-serif uppercase text-cyberBlue shadow-[-2px_-2px_2px_rgba(255,255,255,0.08),2px_2px_2px_rgba(0,0,0,0.56),inset_2px_2px_2px_rgba(255,255,255,0.08),inset_-2px_-2px_2px_rgba(0,0,0,0.56)] active:shadow-[2px_2px_2px_rgba(255,255,255,0.08),-2px_-2px_2px_rgba(0,0,0,0.56),inset_-2px_-2px_2px_rgba(255,255,255,0.08),inset_2px_2px_2px_rgba(0,0,0,0.56)] transition duration-100 ease-in-out"
      )}
    >
      {children}
    </button>
  );
}
