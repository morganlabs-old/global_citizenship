import Image, { StaticImageData } from "next/image";
import styles from "./ImageTextArea.module.scss";

interface ImageTextAreaProps {
  children: React.ReactNode;
  src: string | StaticImageData;
  alt: string;
  right?: boolean;
}

export default function ImageTextArea({
  children,
  src,
  alt,
  right = false,
}: ImageTextAreaProps) {
  // If image on left-hand side
  if (!right)
    return (
      <div className={styles.imageTextArea}>
        <Image className={styles.image} src={src} alt={alt} />
        <div className={styles.content}>{children}</div>
      </div>
    );
  // If image on right-hand side
  else
    return (
      <div className={styles.imageTextArea}>
        <div className={styles.content}>{children}</div>
        <Image className={styles.image} src={src} alt={alt} />
      </div>
    );
}
