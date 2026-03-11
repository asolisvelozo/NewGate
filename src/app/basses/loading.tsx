import { Container } from "@/components/container";

export default function Loading() {
  return (
    <Container>
      <div className="flex justify-center pt-4 -mb-12 relative z-10"> 
        <div className="h-40 sm:h-56 md:h-80 lg:h-96 w-full max-w-2xl bg-gray-800/50 rounded-xl animate-pulse"></div>
      </div>

      <div className="flex justify-center relative z-20 mt-12">
        <div className="h-[400px] w-full max-w-5xl bg-gray-800/40 rounded-2xl animate-pulse"></div>
      </div>
    </Container>
  );
}