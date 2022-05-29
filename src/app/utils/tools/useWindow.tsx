import { useEffect } from "react";

export const useWindow = (handleScroll: any) => {
  return useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
};
