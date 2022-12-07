import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        Created by Morgan Jones as a part of the Skills Challenge GCSE.{" "}
        <a href="https://sweetuk.net/s/github?repo=Global-Citizenship">
          Source code.
        </a>
      </p>
    </footer>
  );
}
