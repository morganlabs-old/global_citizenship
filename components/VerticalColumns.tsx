import { JSXElementConstructor, ReactElement } from "react";
import styles from "./VerticalColumns.module.scss";

interface VerticalColumnContainerProps {
  children: ReactElement<typeof VerticalColumn, JSXElementConstructor<any>>[];
}

export function VerticalColumnContainer({
  children,
}: VerticalColumnContainerProps) {
  return <div className={styles.verticalColumnContainer}>{children}</div>;
}

interface VerticalColumnProps {
  children: React.ReactNode;
}

export function VerticalColumn({ children }: VerticalColumnProps) {
  return <div className={styles.verticalColumn}>{children}</div>;
}
