import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/logo.png" // 👈 el archivo está en la carpeta public/
      alt="NewGate Guitars"
      width={200}
      height={80}
      className="w-28 h-auto object-contain"
    />
  );
}