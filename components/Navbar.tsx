import Image from "next/image";
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
      name: "Definition",
      href: "/#what-is-a-refugee",
    },
    {
      name: "The issue",
      href: "/#whats-the-issue",
    },
  ],
}: NavbarProps) {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        {/* <Image src="/logo.svg" alt="Logo" width="20" height="20" /> */}
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
