"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathName = usePathname();

  // Define a helper to conditionally add active styles
  const getLinkClasses = (path) =>
    `p-1 pr-3 pl-3 rounded-[64px] w-fit text-center transition duration-300 ease-in-out block ${
      pathName === path || pathName.startsWith(path + "/")
        ? "bg-[#f0f0f0] text-[#1e1e28]"
        : "text-[#47474f] hover:text-[#1e1e28]"
    }`;

  return (
    <nav className=" overflow-x-auto flex justify-between">

      <ul className=" flex gap-3 items-center text-[15px]">
        <li>
          <Link href="/" className={getLinkClasses("/")}>
            Home
          </Link>
        </li>

        <li>
          <Link href="/projects" className={getLinkClasses("/projects")}>
            Projects
          </Link>
        </li>
        <li>
          <Link href="/contact" className={getLinkClasses("/contact")}>
            Contact
          </Link>
        </li>
        <li>
          <Link href="/about" className={getLinkClasses("/about")}>
            About
          </Link>
        </li>
      </ul>
 <a href="/" className="hover:opacity-80 transition ease-in-out duration-300">
             <svg
        xmlns="http://www.w3.org/2000/svg"
        width="70"
        height="70"
        viewBox="0 0 316 400"
        fill="none"
      >
        <path
          d="M 217.00 225.00 L 214.00 225.00 L 190.00 239.00 L 186.00 243.00 L 185.00 247.00 L 212.00 232.00 Z"
          fill="#1e1e28"
        />
        <path
          d="M 220.00 204.00 L 211.00 196.00 L 209.00 196.00 L 200.00 205.00 L 195.00 200.00 L 190.00 198.00 L 179.00 210.00 L 189.00 220.00 L 192.00 220.00 L 201.00 211.00 L 210.00 218.00 L 219.00 210.00 Z"
          fill="#1e1e28"
        />
        <path
          d="M 218.00 135.00 L 216.00 135.00 L 209.00 144.00 L 205.00 146.00 L 198.00 146.00 L 194.00 142.00 L 194.00 130.00 L 192.00 129.00 L 186.00 143.00 L 185.00 153.00 L 180.00 160.00 L 173.00 161.00 L 169.00 159.00 L 167.00 165.00 L 164.00 168.00 L 157.00 168.00 L 155.00 166.00 L 145.00 176.00 L 138.00 177.00 L 129.00 175.00 L 128.00 201.00 L 122.00 227.00 L 116.00 237.00 L 108.00 245.00 L 98.00 251.00 L 87.00 254.00 L 75.00 254.00 L 61.00 249.00 L 55.00 243.00 L 51.00 234.00 L 51.00 216.00 L 57.00 195.00 L 54.00 194.00 L 46.00 215.00 L 43.00 229.00 L 42.00 246.00 L 44.00 257.00 L 47.00 263.00 L 55.00 271.00 L 66.00 276.00 L 83.00 276.00 L 90.00 274.00 L 101.00 268.00 L 108.00 262.00 L 116.00 252.00 L 124.00 237.00 L 130.00 220.00 L 134.00 192.00 L 137.00 189.00 L 143.00 187.00 L 150.00 180.00 L 152.00 182.00 L 157.00 182.00 L 168.00 173.00 L 176.00 174.00 L 187.00 162.00 L 192.00 166.00 L 199.00 166.00 L 205.00 163.00 L 209.00 159.00 L 214.00 150.00 Z"
          fill="#1e1e28"
        />
        <path
          d="M 261.00 122.00 L 255.00 134.00 L 250.00 154.00 L 249.00 198.00 L 246.00 219.00 L 248.00 220.00 L 252.00 213.00 L 257.00 194.00 L 260.00 139.00 L 263.00 123.00 Z"
          fill="#1e1e28"
        />
        <path
          d="M 131.00 132.00 L 132.00 136.00 L 146.00 123.00 L 149.00 123.00 L 164.00 134.00 L 165.00 133.00 L 164.00 128.00 L 161.00 124.00 L 149.00 115.00 L 146.00 115.00 L 134.00 127.00 Z"
          fill="#1e1e28"
        />
        <path
          d="M 275.00 91.00 L 267.00 91.00 L 258.00 104.00 L 253.00 108.00 L 250.00 104.00 L 248.00 104.00 L 245.00 109.00 L 245.00 115.00 L 247.00 117.00 L 252.00 116.00 L 266.00 99.00 L 272.00 102.00 L 276.00 95.00 Z"
          fill="#1e1e28"
        />
        <path
          d="M 215.00 89.00 L 203.00 101.00 L 214.00 112.00 L 221.00 107.00 L 225.00 101.00 L 224.00 96.00 Z"
          fill="#1e1e28"
        />
        <path
          d="M 277.00 71.00 L 253.00 84.00 L 246.00 91.00 L 246.00 94.00 L 272.00 79.00 L 276.00 75.00 Z"
          fill="#1e1e28"
        />
        <path
          d="M 231.00 73.00 L 225.00 64.00 L 213.00 56.00 L 200.00 69.00 L 197.00 74.00 L 197.00 78.00 L 212.00 65.00 L 217.00 66.00 L 229.00 75.00 L 231.00 75.00 Z"
          fill="#1e1e28"
        />
      </svg>
 </a>
    </nav>
  );
}
