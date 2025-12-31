'use client';
import { useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from 'lucide-react';

interface DropdownItem {
  link: string;
  name: string;
}

interface Props {
  link: string;
  name: string;
  dropdownItems?: DropdownItem[];
}

export const Navlink = ({ link, name, dropdownItems = [] }: Props) => {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setDropdownOpen(false), 200);
  };

  // Lógica de activo
  // Nota: Para "Inicio" (link vacío), la comparación exacta es necesaria.
  const isHome = link === "" && pathname === "/";
  const isOtherActive = link !== "" && (pathname === `/${link}` || pathname.startsWith(`/${link}/`));
  const isActive = isHome || isOtherActive;

  return (
    <div className="relative group z-50" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Link href={`/${link}`} className="flex items-center gap-1 py-2">
        <span
          className={`
            text-xs font-bold tracking-[0.15em] uppercase transition-colors duration-300
            ${isActive ? 'text-[#d79623]' : 'text-[#f0e1ce] group-hover:text-[#d79623]'}
          `}
        >
          {name}
        </span>
        {dropdownItems.length > 0 && (
          <ChevronDown size={12} className={`transition-transform duration-300 ${dropdownOpen ? 'rotate-180 text-[#d79623]' : 'text-[#f0e1ce]/50'}`} />
        )}
      </Link>

      {/* LÍNEA DECORATIVA */}
      <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#d79623] transform transition-transform duration-300 origin-left ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>

      {/* DROPDOWN MENU */}
      {dropdownItems.length > 0 && (
        <div
          className={`
                absolute left-1/2 -translate-x-1/2 mt-0 pt-4 w-56 transform transition-all duration-300 origin-top
                ${dropdownOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'}
            `}
        >
          <div className="bg-[#003629] border border-[#f0e1ce]/20 shadow-2xl rounded-lg overflow-hidden py-2">
            <ul>
              {dropdownItems.map((item, index) => {
                const itemIsActive = pathname === `/${link}/${item.link}`;
                return (
                  <li key={index}>
                    <Link href={`/${link}/${item.link}`} className="block relative">
                      <span
                        className={`
                          block px-6 py-3 text-xs uppercase tracking-widest transition-colors duration-200
                          ${itemIsActive ? 'bg-[#002720] text-[#d79623]' : 'text-[#f0e1ce] hover:bg-[#004d3a] hover:text-white'}
                        `}
                      >
                        {item.name}
                      </span>
                      {itemIsActive && <span className="absolute left-0 top-0 bottom-0 w-1 bg-[#d79623]"></span>}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};