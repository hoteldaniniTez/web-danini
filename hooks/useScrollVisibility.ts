import { useState, useEffect } from 'react';

interface ScrollState {
  isVisible: boolean;
  isScrolled: boolean;
}

export const useScrollVisibility = (): ScrollState => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Asegurarse de que el código se ejecute solo en el cliente (browser)
    if (typeof window === 'undefined') return;

    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      
      // Detectar si ha bajado de la parte superior (para fondo transparente/sólido)
      setIsScrolled(currentScrollY > 50);

      // Lógica de ocultar al bajar, mostrar al subir
      if (currentScrollY > lastScrollY && currentScrollY > 100) { 
        setIsVisible(false); // Bajando
      } else {
        setIsVisible(true);  // Subiendo
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  return { isVisible, isScrolled };
};