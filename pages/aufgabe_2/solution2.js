import styles from '../../styles/Home.module.css'
import Link from 'next/link'

export default function Solution2() {
    return (
        <>
        <main className={styles.main}>
            <h1 className={styles.title}>Lösung zur Aufgabe 2</h1>
            <br></br>
            <br></br>
            <p>Hier kommt Lösung 2</p>
            <br></br>
            <br></br>

            <div className={styles.btn}>
                <button className={styles.btn_aufgaben}>
                    <h3>
                        <Link href="/aufgabe_2/aufgabe2">Zurück zur Aufgabe 2</Link>
                    </h3>
                </button>

                <br></br>
                <br></br>
                <button className={styles.btn_home}>
                    <h4>
                        <Link href="/">Zurück zur Startseite</Link>
                    </h4>
                </button>
            </div>
        </main>
        </>
    )
}