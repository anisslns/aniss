"use client";

import { usePathname } from "next/navigation";

export default function ImageArea() {
  const pathname = usePathname();

  const imageSrc =
    pathname === "/"
      ? "/jj.png"
      : pathname === "/about"
      ? "/anis-lounis.webp"
      : pathname === "/projects/youtube-workflow"
      ? "/yf.webp"
      : pathname === "/projects/instagram-workflow"
      ? "/inf.webp"
      : pathname === "/projects/tiktok-workflow"
      ? "/inf.webp"
      : pathname === "/projects/website-typo-workflow"
      ? "/tw.webp"
      : pathname === "/contact"
      ? "/email.webp"
      : "/n8n.png";

  return (
    <img
      src={imageSrc}
      alt=""
      className="rounded-2xl w-full h-full max-md:h-auto object-cover"
    />
  );
}
