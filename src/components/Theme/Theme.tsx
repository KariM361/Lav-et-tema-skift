import style from './Theme.module.scss';

interface ThemeProps {
  isDark: boolean;
  onTheme: () => void;
}

export function Theme({ isDark, onTheme }: ThemeProps) {
  return (
    <button className={style.Theme} onClick={onTheme}>
      {isDark ? "☀️ Light mode" : "🌙 Dark mode"}
    </button>
  );
}

