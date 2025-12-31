'use client';

import { ReactNode, useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Minus } from 'lucide-react';
import { useUIStore } from '@/store';
import clsx from 'clsx';

interface DropdownItem {
  link: string;
  name: string;
}

interface Props {
  link: string;
  name: string;
  icon?: ReactNode;
  dropdownItems?: DropdownItem[];
}

export const NavlinkSidebar = ({ link, name, dropdownItems = [], icon }: Props) => {
  const pathname = usePathname();
  const closeMenu = useUIStore(state => state.closeSideMenu);
  const isSideMenuOpen = useUIStore(state => state.isSideMenuOpen); // Suscribirse al estado del menú

  const mainPath = link === "" ? "/" : `/${link}`;
  // Verificamos si estamos en una subpágina de esta sección
  const isActiveParent = pathname.startsWith(mainPath) && link !== "";
  const isActive = pathname === mainPath;

  // ESTADO: Inicializamos en false para que SIEMPRE aparezca cerrado al abrir el sidebar,
  // a menos que el usuario lo abra manualmente. Si prefieres que se abra solo si estás dentro,
  // cambia 'false' por 'isActiveParent'.
  const [isOpen, setIsOpen] = useState(false);

  const contentRef = useRef<HTMLDivElement>(null);

  // EFECTO: Si el menú principal se cierra, forzamos el cierre del acordeón interno.
  // Esto soluciona tu problema de que "sigue abierto" la próxima vez.
  useEffect(() => {
    if (!isSideMenuOpen) {
      setIsOpen(false);
    }
  }, [isSideMenuOpen]);

  // MANEJADOR DE CLIC EN SUB-ITEMS
  const handleSubItemClick = () => {
    closeMenu();      // 1. Cierra el sidebar global
    setIsOpen(false); // 2. Cierra el acordeón localmente (feedback instantáneo)
  };

  return (
    <div className="group/item mb-2">

      {/* CONTENEDOR PRINCIPAL */}
      <div
        className={clsx(
          "relative flex items-center justify-between p-4 transition-all duration-500 rounded-lg select-none",
          "hover:bg-linear-to-r hover:from-[#d79623]/20 hover:to-transparent",
          // Mantiene el color activo si es la página exacta O si es padre de la página actual
          (isActive || (isActiveParent && isOpen)) ? "text-[#d79623] bg-linear-to-r from-[#d79623]/25 to-transparent" : "text-[#f0e1ce]/90 hover:text-[#d79623]"
        )}
      >
        {/* Línea activa */}
        <div className={clsx(
          "absolute left-0 inset-y-0 w-1 bg-[#d79623] transition-all duration-500",
          (isActive || (isActiveParent && isOpen)) ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 group-hover/item:scale-y-50 group-hover/item:opacity-50"
        )}></div>

        {/* 🔹 BOTÓN PRINCIPAL (LINK O TOGGLE) */}
        {/* Lógica: Si tiene dropdown, el clic principal solo abre/cierra. Si no, navega. */}
        {dropdownItems.length > 0 ? (
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-6 pl-2 flex-1 cursor-pointer"
          >
            <span className={clsx(
              "transition-all duration-500 drop-shadow-sm transform group-hover/item:scale-110",
              (isActive || (isActiveParent && isOpen)) ? "text-[#d79623]" : "text-[#f0e1ce]/50 group-hover/item:text-[#d79623]"
            )}>
              {icon}
            </span>
            <span className="text-lg font-bold tracking-[0.15em] uppercase font-sans">
              {name}
            </span>
          </div>
        ) : (
          <Link
            href={mainPath}
            onClick={closeMenu}
            className="flex items-center gap-6 pl-2 flex-1"
          >
            <span className={clsx(
              "transition-all duration-500 drop-shadow-sm transform group-hover/item:scale-110",
              isActive ? "text-[#d79623]" : "text-[#f0e1ce]/50 group-hover/item:text-[#d79623]"
            )}>
              {icon}
            </span>
            <span className="text-lg font-bold tracking-[0.15em] uppercase font-sans">
              {name}
            </span>
          </Link>
        )}

        {/* 🔹 FLECHA INDEPENDIENTE */}
        {dropdownItems.length > 0 && (
          <button
            onClick={(e) => {
              e.stopPropagation(); // Evita doble evento
              setIsOpen(!isOpen);
            }}
            className="p-2 text-[#d79623]/70 hover:text-[#d79623] transition-transform duration-500"
          >
            <ChevronDown
              size={22}
              className={clsx(
                "transition-transform duration-500",
                isOpen ? "rotate-180 text-[#d79623]" : "rotate-0"
              )}
            />
          </button>
        )}
      </div>

      {/* SUBMENÚ */}
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
          opacity: isOpen ? 1 : 0
        }}
      >
        <div className="ml-10 mt-1 border-l border-[#d79623]/20 pl-6 space-y-1 py-2 mb-2">
          {dropdownItems.map((item, i) => {
            const subPath = `${mainPath}/${item.link}`;
            const isSubActive = pathname === subPath;

            return (
              <Link
                key={i}
                href={subPath}
                // AQUÍ ESTÁ LA SOLUCIÓN:
                onClick={handleSubItemClick}
                className={clsx(
                  "group/sub flex items-center gap-3 py-3 text-sm font-bold tracking-[0.15em] uppercase transition-all font-sans hover:translate-x-2",
                  isSubActive ? "text-[#d79623]" : "text-[#f0e1ce]/70 hover:text-[#d79623]"
                )}
              >
                <Minus
                  size={12}
                  className={clsx(
                    "transition-all duration-300",
                    isSubActive
                      ? "text-[#d79623] w-4 opacity-100"
                      : "text-[#d79623] w-0 opacity-0 group-hover/sub:w-4 group-hover/sub:opacity-100"
                  )}
                />
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>

    </div>
  );
};