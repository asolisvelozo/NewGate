export function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg text-center text-4xl">
      {children}
    </div>
  );
}