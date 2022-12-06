import styles from "./Content.module.scss";

interface ContentProps {
  children: React.ReactNode;
}

export default function Content({ children }: ContentProps) {
  return <main className={styles.content}>{children}</main>;
}
