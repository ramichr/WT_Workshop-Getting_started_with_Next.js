/* eslint-disable @next/next/link-passhref */
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

export default function Solution3({ users }) {
    return (
        <>
        <main className={styles.main}>
            <h1 className={styles.title}>Lösung zur Aufgabe 3</h1>
            <br />
            <br />
            <Layout home>
                    <h2>Users list</h2>
                        {users.map((user) => (
                            <Link href={'/aufgaben/aufgabe_3/solution_3/' + user.id} key={user.id}>
                                <li className={styles.link}> 
                                {user.name} 
                                <br />
                                @{user.username}
                                <br />
                                <br />
                                </li>
                            </Link>
                        ))}
            </Layout>

{/* ---------------------------------------------------------------------- */}
            <div className={styles.btn}>
                <button className={styles.btn_aufgaben}>
                    <h3>
                        <Link href="/aufgaben/aufgabe_3/aufgabe3">Zurück zur Aufgabe 3</Link>
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