import Image from "next/image";

type LogoProps = {
  /** Logonun piksel yüksekliği; genişlik orana göre çıkar. */
  height?: number;
  /** Menüdeki logo gibi ekranın ilk görünen kısmındaysa önceden yüklenir. */
  priority?: boolean;
};

// public/logo.svg'nin viewBox oranı (800 × 485).
const RATIO = 800 / 485;

/**
 * Marka logosu — eski 138 × 94 px logo.png'nin vektör yeniden çizimi.
 * Yazı bandı N'yi beyaz dolguyla değil boşlukla kestiği için her zeminde
 * çalışır. "NADAS" yazısı logonun yüksekliğinin yalnızca beşte biri; 44 px'in
 * altında okunaksızlaşır.
 */
export default function Logo({ height = 48, priority = false }: LogoProps) {
  return (
    <Image
      src="/logo.svg"
      alt="Nadas LED"
      width={Math.round(height * RATIO)}
      height={height}
      priority={priority}
      style={{ height, width: "auto" }}
    />
  );
}
