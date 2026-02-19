import type { ReactNode } from "react";
import style from "./Wrapper.module.scss";

interface WrapperProps {
  children: ReactNode;
  isDark: boolean;
}

export function Wrapper({ children, isDark }: WrapperProps) {
  return (
    <div className={`${style.wrapper} ${isDark ? style.dark : style.light}`}>
      {children}
    </div>
  );
}