import styles from "./ActionRow.module.scss";

interface ActionRowProp {
  children: React.ReactNode;
}

export default function ActionRow({ children }: ActionRowProp) {
  return <div className={styles.actionRow}>{children}</div>;
}
