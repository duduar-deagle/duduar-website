export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="border border-[rgba(0,0,0,0.08)] rounded-xl p-6 shadow-[2px_2px_2px_rgba(255,255,255,0.08),-2px_-2px_2px_rgba(0,0,0,0.56),inset_2px_2px_2px_rgba(255,255,255,0.08),inset_-2px_-2px_2px_rgba(0,0,0,0.56)]">
      {children}
    </div>
  );
}
