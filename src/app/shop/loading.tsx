import { Container } from "@/components/container";

export default function Loading() {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center min-h-[50vh] gap-8">
        
        <div className="relative w-16 h-16 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-t-2 border-b-2 border-blue-600 animate-spin"></div>
          <div className="absolute inset-3 rounded-full border-r-2 border-l-2 border-gray-500 animate-pulse"></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <span className="text-white text-2xl font-serif tracking-widest opacity-80">
            NewGate
          </span>
          <span className="text-gray-400 text-xs tracking-[0.3em] uppercase animate-pulse">
            Afinando el stock...
          </span>
        </div>

      </div>
    </Container>
  );
}