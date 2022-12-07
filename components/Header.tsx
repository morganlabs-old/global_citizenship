import Content from "./Content";
import styles from "./Header.module.scss";

interface HeaderProps {
  children: React.ReactNode;
  hero?: boolean;
  id?: string;
}

export default function Header({ children, hero, id }: HeaderProps) {
  return (
    <header id={id} className={`${styles.header} ${hero ? styles.hero : ""}`}>
      {children}
    </header>
  );
}
