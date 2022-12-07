import styles from "./Navbar.module.scss";

interface Page {
  name: string;
  href: `/${string}` | `#${string}` | `http://${string}` | `https://${string}`;
}

interface NavbarProps {
  pages?: Page[];
}

export default function Navbar({
  pages = [
    {
      name: "Home",
      href: "#hero",
    },
    {
      name: "What is a refugee?",
      href: "#what-is-a-refugee",
    },
  ],
}: NavbarProps) {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        {pages.map(({ name, href }) => (
          <li key={name} className={styles.navItem}>
            <a className={styles.navLink} href={href}>
              {name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
