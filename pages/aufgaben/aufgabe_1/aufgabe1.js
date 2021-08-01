/* eslint-disable @next/next/no-img-element */
import styles from '../../../styles/Home.module.css'
import Link from 'next/link'

export default function Aufgabe1() {
    return (
        <>
        <main className={styles.main}>
            <h1 className={styles.title}>Aufgabe 1</h1>
            <br></br>
            <br></br>

            {/*------------------------ Tasks for exercice 1 ---------------------*/}


            {/* 1) Add a header to this page titled "Aufgabe 1" */}
            
            
            {/* 2) Hier Code ersetzen */}
            <img src="/images/profile.jpg" alt="Profile" />
            

            {/* 3) CSS styling */}
            <h3>Hier ist die Aufgabe 1</h3>


            {/* 4) Layout Component */}
            Layout Component
            Homepage



            {/* ------------------------------------------------------------- */}

            <br></br>
            <br></br>
            
            <div className={styles.btn}>
                <button className={styles.btn_solution}>
                    <h3>
                        <Link href="/aufgaben/aufgabe_1/solution_1/solution1">Lösung zur Aufgabe 1</Link>
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