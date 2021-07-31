import styles from '../../../../styles/Home.module.css'
import Link from 'next/link'
import Layout from '../../../../components/layout'

/* Solution for Exercice 3 */

/* ---------------------------------------------------------------------- */

export async function getStaticProps() {
    const res  = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: {
            users: data
        }
    }
}

export default function Solution2({ users }) {
    return (
        <>
        <main className={styles.main}>
            <h1 className={styles.title}>Lösung zur Aufgabe 2</h1>
            <br />
            <br />
            <Layout>
                <section>
                    <h2>Users list</h2>
                    <ul>
                        {users.map(({ id, name, username }) => (
                            <li key={id}>
                                {name}
                                <br />
                                @{username}
                                <br />
                                <br />
                            </li>
                        ))}
                    </ul>
                </section>
            </Layout>

{/* ---------------------------------------------------------------------- */}

            <div className={styles.btn}>
                <button className={styles.btn_aufgaben}>
                    <h3>
                        <Link href="/aufgaben/aufgabe_2/aufgabe2">Zurück zur Aufgabe 2</Link>
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