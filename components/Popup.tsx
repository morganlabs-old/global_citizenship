import Link from "next/link"
import styles from "./Popup.module.scss"

interface PopupProps {
    children: React.ReactNode
}

export default function Popup({ children }: PopupProps) {
    return <div className={styles.popup}>
        {children}
    </div>
}
