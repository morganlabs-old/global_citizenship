import { MouseEventHandler } from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  // onClick?: (...args: any) => any;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type: "Primary" | "Secondary" | "Unavailable";
}

export default function Button({ children, href, onClick, type }: ButtonProps) {
  const btnType = buttonType(type);

  if (href) {
    return (
      <a className={`${styles.button} ${btnType}`} href={href}>
        {children}
      </a>
    );
  }
  // else if (onClick) {
  //   return <button onClick={onClick}>{children}</button>;
  // }
  else {
    return (
      <button className={`${styles.button} ${styles.unavailable}`}>
        {children}
      </button>
    );
  }
}

function buttonType(type: string) {
  switch (type) {
    case "primary":
      return styles.primary;
    case "secondary":
      return styles.secondary;
    case "unavailable":
      return styles.unavailable;
  }
}
