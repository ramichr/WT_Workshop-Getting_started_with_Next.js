import styles from '../../../styles/Home.module.css'
import Link from 'next/link'
import Layout from '../../../components/layout'

/* Write code here */


export default function Aufgabe2() {
    return (
        <>
        <main className={styles.main}>
            <h1 className={styles.title}>Aufgabe 2</h1>
            <br></br>
            <br></br>

            {/* pre-rendering and data fetching (getStaticProps) */}
            <Layout>
                <section>
                    <h2>Users list</h2>
                    <ul>
                        {/* Write code here */}
                    </ul>
                </section>
            </Layout>

            <br></br>
            <br></br>
            
            <div className={styles.btn}>
                <button className={styles.btn_solution}>
                    <h3>
                        <Link href="/aufgaben/aufgabe_2/solution_2/solution2">Lösung zur Aufgabe 2</Link>
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