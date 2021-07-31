import styles from '../../../styles/Home.module.css'
import Link from 'next/link'

export default function Aufgabe3() {
    return (
        <>
        <main className={styles.main}>
            <h1 className={styles.title}>Aufgabe 3</h1>
            <br></br>
            <br></br>

            {/* Dynamic routes */}

            <br></br>
            <br></br>
            
            <div className={styles.btn}>
                <button className={styles.btn_solution}>
                    <h3>
                        <Link href="/aufgaben/aufgabe_3/solution_3/solution3">Lösung zur Aufgabe 3</Link>
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