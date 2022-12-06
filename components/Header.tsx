import styles from "./Header.module.scss";

interface HeaderProps {
  children: React.ReactNode;
  hero?: boolean;
}

export default function Header({ children, hero }: HeaderProps) {
  return (
    <header className={`${styles.header} ${hero ? styles.hero : ""}`}>
      {children}
    </header>
  );
}
